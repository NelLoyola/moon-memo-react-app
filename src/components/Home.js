import React from "react";
import { Link } from "react-router-dom";

import MoonLogo from "./moon_memo_logo.png"; // import the logo image

function HomePage() {
  return (
    <div>
      <img src={MoonLogo} alt="moonlogo" /> {/* use the imported image */}
      <Link to="/moonphase">
        <button>Check today's moon phase</button>
      </Link>
    </div>
  );
}
export default HomePage;
