import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";



const NavTabs = ()  => {
  const [showing, setShowing] = useState(false);
  const location = useLocation();

  // const logout = () => {
  //   axios({
  //     method: "GET",
      
  //     url: "/api/",
  //   }).then((res) => console.log("Goodbye"))
  // }



  return (
    <>
    {/* <div className="title-bar" data-responsive-toggle="main-nav" data-hide-for="medium">
    <button className="menu-icon" type="button" data-toggle="main-nav"></button>
    <div className="title-bar-title">Menu</div>
  </div> */}
    <div className="top-bar" id="main-nav">
      <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu></ul>
          <h1 className="nav">DevConnect</h1> <h5 className="header"><span>...where developers come to &lt;link&gt; up</span></h5>
        </div>
        <ul className="vertical medium-horizontal menu top-bar-right">
          <li><Link to="/" className={location.pathname === "/login" ? "Login" : "nav"} ><i className="fi-list"></i><span><h3 className="nav">Login</h3></span></Link></li>
          <li><Link to="/signup" className={location.pathname === "/signup" ? "Sign Up" : "nav"}><i className="fi-list"></i><span><h3 className="nav">Sign Up</h3></span></Link></li>
          <li><Link to="/message" className={location.pathname === "/message" ? "Message" : "nav"}><i className="fi-list"></i><span><h3 className="nav">Message</h3></span></Link></li>
          <li><Link to="/selfedit" className={location.pathname === "/selfedit" ? "SelfEdit" : "nav"}><i className="fi-list"></i><span><h3 className="nav">Edit Profile</h3></span></Link></li> 
          <li><Link to="/" className={location.pathname === "/login" ? "Login" : "nav"} ><i className="fi-list"></i><span><h3 className="nav">Logout</h3></span></Link></li>

        </ul>
      </div>
     
   </>
  );}

  export default NavTabs;
