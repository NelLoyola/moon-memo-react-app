import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <img src="src/components/moon_memo_logo.png" alt="moonlogo" />
      <Link to="/moonphase">
        <button>Check today's moon phase</button>
      </Link>
    </div>
  );
}
export default HomePage;
