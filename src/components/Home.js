import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import MoonLogo from "./moon_memo_logo.png"; // import the logo image

function HomePage() {
  return (
    <div className={styles.container}>
      <img src={MoonLogo} alt="moonlogo" className={styles.logo} />
      <Link to="/moonphase">
        <button className={styles.button}>Check today's moon phase</button>
      </Link>
    </div>
  );
}
export default HomePage;
