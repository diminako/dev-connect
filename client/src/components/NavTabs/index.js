import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="navbar navbar-expand-lg navbar-light bg-info">
      <li className="nav-item navbar-nav h5">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Log In
        </Link>
      </li>
      <li className="nav-item navbar-nav ml-auto h5 ">
        <Link
          to="/signup"
          className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}
        >
          Sign Up
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;