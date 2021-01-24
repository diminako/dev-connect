import React from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";



const NavTabs = ()  => {
  
  const location = useLocation();

  // const logout = () => {
  //   axios({
  //     method: "GET",
      
  //     url: "/api/",
  //   }).then((res) => console.log("Goodbye"))
  // }



  return (
    <>
    <div className="top-bar">
      <div className="top-bar-left">
          <h1 className="nav">DevConnect</h1> <h5 className="header"><span>...where developers come to &lt;link&gt; up</span></h5>
        </div>
        <ul className="vertical medium-horizontal menu top-bar-right">
          <li><Link to="/" className={location.pathname === "/login" ? "Login" : "nav"} ><i className="fi-list"></i><span><h3 className="nav">Login</h3></span></Link></li>
          <li><Link to="/signup" className={location.pathname === "/signup" ? "Sign Up" : "nav"}><i className="fi-list"></i><span><h3 className="nav">Sign Up</h3></span></Link></li>
          <li><Link to="/message" className={location.pathname === "/message" ? "Message" : "nav"}><i className="fi-list"></i><span><h3 className="nav">Message</h3></span></Link></li>
          <li><Link to="/" className={location.pathname === "/login" ? "Login" : "nav"} ><i className="fi-list"></i><span><h3 className="nav">Logout</h3></span></Link></li>

        </ul>
      </div>
     
   </>
  );}

  export default NavTabs;
