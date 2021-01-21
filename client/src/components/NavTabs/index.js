import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <ul class="medium-horizontal menu align-right">
    <li><Link to="/"  className={location.pathname === "/login" ? "Login" : ""}><i class="fi-list black"></i><span>Login</span></Link></li> 
    <li><Link to="/signup" className={location.pathname === "/signup" ? "Sign Up" : ""}><i class="fi-list"></i><span>Sign Up</span></Link></li> 
    <li><Link to="/message" className={location.pathname === "/message" ?   "Message" : ""}><i class="fi-list"></i><span>Message</span></Link></li> 
   </ul>
   
  );
}

export default NavTabs;