import React, { useState, useEffect } from "react";
import styles from "./MoonPhase.module.css";
import getMoonPhaseImage from "./getMoonPhaseImage";

function MoonPhase() {
  const [moonPhaseData, setMoonPhaseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (latitude, longitude, date) => {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}/${date.toISOString()}?unitGroup=metric&key=5HLAMT6C2LQHXCZDZMH7X69WA&include=current`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log("Moon phase data:", data);
        setMoonPhaseData(data);
      } catch (error) {
        console.error("Error fetching moon phase data:", error);
        setError(error.message);
      }
    };

    const getLocationAndDate = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log("Latitude:", position.coords.latitude);
            console.log("Longitude:", position.coords.longitude);
            const date = new Date();
            fetchData(latitude, longitude, date);
          },
          (error) => {
            console.error("Error getting user location:", error);
            setError("Error getting user location");
          }
        );
      } else {
        console.error("Geolocation is not supported");
        setError("Geolocation is not supported");
      }
    };

    getLocationAndDate();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!moonPhaseData) {
    return <div>Loading...</div>;
  }

  const currentConditions = moonPhaseData.currentConditions;
  const moonPhaseNumber = currentConditions && currentConditions.moonphase;
  const moonPhaseName = getMoonPhaseName(moonPhaseNumber);
  const moonPhaseImage = getMoonPhaseImage(moonPhaseName);

  return (
    <div className={styles.container}>
      <img src={moonPhaseImage} alt="Moon phase" className={styles.image} />
      <div className={styles.name}>{moonPhaseName}</div>
    </div>
  );
}

function getMoonPhaseName(moonPhaseNumber) {
  if (moonPhaseNumber >= 0 && moonPhaseNumber < 0.25) {
    return "New Moon";
  } else if (moonPhaseNumber >= 0.25 && moonPhaseNumber < 0.5) {
    return "Waxing Crescent";
  } else if (moonPhaseNumber === 0.5) {
    return "Full Moon";
  } else if (moonPhaseNumber > 0.5 && moonPhaseNumber <= 0.75) {
    return "Waning Gibbous";
  } else if (moonPhaseNumber > 0.75 && moonPhaseNumber <= 1) {
    return "Waning Crescent";
  } else if (moonPhaseNumber === 0.25) {
    return "First Quarter";
  } else if (moonPhaseNumber === 0.75) {
    return "Last Quarter";
  }
}

export default MoonPhase;
