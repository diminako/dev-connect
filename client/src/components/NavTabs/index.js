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
<<<<<<< HEAD
          <h1 className="nav">DevConnect</h1> <h5><span>...where developers come to &lt;link&gt; up</span></h5>
        {/* </div> */}
        <ul className="horizontal menu top-bar-right nav">
          <li><Link to="/" className={location.pathname === "/login" ? "Login" : ""}><i className="fi-list nav"></i><span><h3 className="nav">Login</h3></span></Link></li>
          <li><Link to="/signup" className={location.pathname === "/signup" ? "Sign Up" : ""}><i className="fi-list"></i><span><h3 className="nav">Sign Up</h3></span></Link></li>
          <li><Link to="/message" className={location.pathname === "/message" ? "Message" : ""}><i className="fi-list"></i><span><h3 className="nav">Message</h3></span></Link></li>
          <li><Link to="/selfedit" className={location.pathname === "/selfedit" ? "SelfEdit" : ""}><i className="fi-list"></i><span><h3 className="nav">Edit Profile</h3></span></Link></li> 
=======
          <h1 className="nav">DevConnect</h1> <h5 className="header"><span>...where developers come to &lt;link&gt; up</span></h5>
        </div>
        <ul className="vertical medium-horizontal menu top-bar-right">
          <li><Link to="/" className={location.pathname === "/login" ? "Login" : "nav"} ><i className="fi-list"></i><span><h3 className="nav">Login</h3></span></Link></li>
          <li><Link to="/signup" className={location.pathname === "/signup" ? "Sign Up" : "nav"}><i className="fi-list"></i><span><h3 className="nav">Sign Up</h3></span></Link></li>
          <li><Link to="/message" className={location.pathname === "/message" ? "Message" : "nav"}><i className="fi-list"></i><span><h3 className="nav">Message</h3></span></Link></li>
          <li><Link to="/selfedit" className={location.pathname === "/selfedit" ? "SelfEdit" : ""}><i className="fi-list"></i><span><h3 className="nav">Edit Profile</h3></span></Link></li> 
          <li><Link to="/" className={location.pathname === "/login" ? "Login" : "nav"} ><i className="fi-list"></i><span><h3 className="nav">Logout</h3></span></Link></li>

>>>>>>> 3c841c0bf89b3d7df908afbaf57ada2c88e2c616
        </ul>
      </div>
     
   </>
  );}

  export default NavTabs;
