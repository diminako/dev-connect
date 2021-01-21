import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="menu-text nav"><h1 class="nav">DevConnect</h1></ul>
      </div>
      <ul class="horizontal menu top-bar-right nav">
        <li><Link to="/" className={location.pathname === "/login" ? "Login" : ""}><i class="fi-list nav"></i><span><h3 class="nav">Login</h3></span></Link></li>
        <li><Link to="/signup" className={location.pathname === "/signup" ? "Sign Up" : ""}><i class="fi-list"></i><span><h3 class="nav">Sign Up</h3></span></Link></li>
        <li><Link to="/message" className={location.pathname === "/message" ? "Message" : ""}><i class="fi-list"></i><span><h3 class="nav">Message</h3></span></Link></li>
      </ul>
    </div>
        
  );
}

export default NavTabs;