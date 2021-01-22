import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavTabs = ()  => {
  const location = useLocation();

  return (
    <>
    <div class="top-bar">
      <div className="top-bar-left">
          <h1 className="nav">DevConnect</h1> <h5><span>...where developers come to &lt;link&gt; up</span></h5>
        </div>
        <ul className="horizontal menu top-bar-right nav">
          <li><Link to="/" className={location.pathname === "/login" ? "Login" : ""}><i className="fi-list nav"></i><span><h3 className="nav">Login</h3></span></Link></li>
          <li><Link to="/signup" className={location.pathname === "/signup" ? "Sign Up" : ""}><i className="fi-list"></i><span><h3 className="nav">Sign Up</h3></span></Link></li>
          <li><Link to="/message" className={location.pathname === "/message" ? "Message" : ""}><i className="fi-list"></i><span><h3 className="nav">Message</h3></span></Link></li>
        </ul>
      </div>
     
   </>
  );}

  export default NavTabs;
