import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="medium-horizontal menu align-right">
    <li><Link to="/"  className={location.pathname === "/login" ? "Login" : ""}><i className="fi-list"></i><span>Login</span></Link></li> 
      
    <li><Link to="/signup" className={location.pathname === "/signup" ? "Sign Up" : ""}><i className="fi-list"></i><span>Sign Up</span></Link></li> 
    <li><Link to="/message" className={location.pathname === "/message" ?   "Message" : ""}><i className="fi-list"></i><span>Message</span></Link></li> 
   </ul>
   
  );
}

export default NavTabs;