import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <img src="path/to/your/logo.png" alt="logo" />
      <Link to="/moon-phase">
        <button>Check today's moon phase</button>
      </Link>
    </div>
  );
}
export default HomePage;
