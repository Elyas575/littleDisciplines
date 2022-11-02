import React from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <header>
      <div></div>
      <nav>
        <li>
          <Link to="/home" className="link">
     
            Disciplines
          </Link>
        </li>
        <li>
          <Link to="/disciplines" className="link">
        
            Add Disciplines
          </Link>
        </li>
      </nav>
    </header>
  );
}

export default MainNavigation;
