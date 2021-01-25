import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./style.css";
import UserContext from "../../Store/UserContext";


const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const user = useContext(UserContext);
  const skill = useContext(UserContext);
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

  return (
    <>
      <img className="bg" alt="teamwork" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-193-ae-00070.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a642750a6aa2bf3ff96e964c924dab97" ></img>
      <div className="grid-container log">
        <h1 className="text-center header">Login</h1>
        <div className="grid-x grid-padding-x">
          <div className="small-1 cell"></div>
          <div className="small-10 cell">
            <div className="callout">
              <form onSubmit={login}>
                <div className="grid-container">
                  <div className="grid-x grid-padding-x">
                    <div className="small-8 cell">
                      <label><h5 className="header">
                        Username</h5>
                        <input type="text" onChange={e => setLoginUsername(e.target.value)} placeholder="username" />
                      </label>
                    </div>
                    <div className="small-8 cell">
                      <label><h5 className="header">
                        Password</h5>
                        <input type="password" onChange={e => setLoginPassword(e.target.value)} placeholder="password" />
                      </label>
                    </div>
                    <div className="small-8 cell">
                      <button className="button large hover" type="submit" >Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

