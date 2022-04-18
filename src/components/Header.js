import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
            {/* Home */}
          </li>
          <li>
            <Link to="/visualization">Visualization</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

export default Header;
