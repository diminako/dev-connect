import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./style.css";
import UserContext from "../../Store/UserContext";


const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const user = useContext(UserContext);
  // const skill = useContext(UserContext);
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/api/",
    }).then((res) => {

      user.onSignIn(res.data);
      if (res.data) {
        history.push("/message");
      }
    })
  };

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
          <li><Link onClick={ handleLogout } to="" className="nav"><i className="fi-list"></i><span ><h3 className="nav">Logout</h3></span></Link></li>

        </ul>
      </div>

    <div className="container background">
      <div className="grid-x sign-up">

        <div className="cell">
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="small-6 cell small-offset-3">
                <div className="callout login-callout">
                <h1 className="text-center header">Login</h1>
                  <form onSubmit={login}>
                    <div className="grid-container">
                      <div className="grid-x grid-padding-x">
                        <div className="cell">
                          <label>
                            <h5 className="header">
                            Username</h5>
                            <input type="text" onChange={e => setLoginUsername(e.target.value)} placeholder="username" />
                          </label>
                        </div>
                        <div className="cell">
                          <label><h5 className="header">
                            Password</h5>
                            <input type="password" onChange={e => setLoginPassword(e.target.value)} placeholder="password" />
                          </label>
                        </div>
                        <div className="cell">
                          <button className="button large hover login-btn" type="submit" >Login</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;

