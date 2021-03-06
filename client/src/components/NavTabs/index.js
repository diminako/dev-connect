// import { set } from "mongoose";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../../Store/UserContext";
// import axios from "axios";



const NavTabs = ()  => {
  // const [showing, setShowing] = useState(false);
  const location = useLocation();
  const userContext = useContext(UserContext)
  // const logout = () => {
  //   console.log("logout button")
  // }

  const handleLogout =()=>{
    userContext.onSignOut()

  }

  return (
    <>
  <div className="top-bar nav">
      <div className="top-bar-left nav">
          <h1 className="navBrand">DevConnect</h1> <h5 className="header"><span>...where developers come to &lt;link&gt; up</span></h5>
        </div>
        <ul className="vertical medium-horizontal menu top-bar-right">
         {!useContext.username &&<> <li><Link to="/" className={location.pathname === "/login" ? "Login" : "nav"} ><i className="fi-list"></i><span><h3 className="nav">Login</h3></span></Link></li>
          <li><Link to="/signup" className={location.pathname === "/signup" ? "Sign Up" : "nav"}><i className="fi-list"></i><span><h3 className="nav">Sign Up</h3></span></Link></li></>}
          <li><Link to="/message" className={location.pathname === "/message" ? "Message" : "nav"}><i className="fi-list"></i><span><h3 className="nav">Message</h3></span></Link></li>
          <li><Link to="/selfedit" className={location.pathname === "/selfedit" ? "SelfEdit" : "nav"}><i className="fi-list"></i><span><h3 className="nav">Edit Profile</h3></span></Link></li> 
          <li><Link onClick={ handleLogout } to="" className="nav"><i className="fi-list"></i><span ><h3 className="nav">Logout</h3></span></Link></li>

        </ul>
      </div>
     
   </>
  );}

  export default NavTabs;
