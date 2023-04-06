import newMoon from "../utils/Images/new.png";
import waxingCrescent from "../utils/Images/waxing_crescent.png";
import firstQuarter from "../utils/Images/first_quarter.png";
import waxingGibbous from "../utils/Images/waxing_gibbous.png";
import fullMoon from "../utils/Images/full.png";
import waningGibbous from "../utils/Images/waning_gibbous.png";
import lastQuarter from "../utils/Images/third_quarter.png";
import waningCrescent from "../utils/Images/waning_crescent.png";

function getMoonPhaseImage(phase) {
  if (phase < 0.0625) {
    return newMoon;
  } else if (phase < 0.1875) {
    return waxingCrescent;
  } else if (phase < 0.3125) {
    return firstQuarter;
  } else if (phase < 0.4375) {
    return waxingGibbous;
  } else if (phase < 0.5625) {
    return fullMoon;
  } else if (phase < 0.6875) {
    return waningGibbous;
  } else if (phase < 0.8125) {
    return lastQuarter;
  } else if (phase < 0.9375) {
    return waningCrescent;
  } else {
    return newMoon;
  }
}

export default getMoonPhaseImage;
