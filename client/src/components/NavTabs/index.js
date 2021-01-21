import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
<<<<<<< HEAD
    <div class="top-bar">
      <div class="top-bar-left">
      <h1 class="nav">DevConnect</h1> <h5><span>...where developers come to &lt;link&gt; up</span></h5>
      </div>
      <ul class="horizontal menu top-bar-right nav">
        <li><Link to="/" className={location.pathname === "/login" ? "Login" : ""}><i class="fi-list nav"></i><span><h3 class="nav">Login</h3></span></Link></li>
        <li><Link to="/signup" className={location.pathname === "/signup" ? "Sign Up" : ""}><i class="fi-list"></i><span><h3 class="nav">Sign Up</h3></span></Link></li>
        <li><Link to="/message" className={location.pathname === "/message" ? "Message" : ""}><i class="fi-list"></i><span><h3 class="nav">Message</h3></span></Link></li>
      </ul>
    </div>
        
=======
    <ul className="medium-horizontal menu align-right">
    <li><Link to="/"  className={location.pathname === "/login" ? "Login" : ""}><i className="fi-list"></i><span>Login</span></Link></li> 
      
    <li><Link to="/signup" className={location.pathname === "/signup" ? "Sign Up" : ""}><i className="fi-list"></i><span>Sign Up</span></Link></li> 
    <li><Link to="/message" className={location.pathname === "/message" ?   "Message" : ""}><i className="fi-list"></i><span>Message</span></Link></li> 
   </ul>
   
>>>>>>> 06bd52098a2385ef0c0cdff98cd7f6ada8b1ddb9
  );
}

export default NavTabs;