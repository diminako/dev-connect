import React, { useState, useContext } from "react";
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

  return (
    <div className="container green">
      <div className="grid-x sign-up">


        <div className="cell">
          <div className="grid-container">
            <h1 className="text-center header">Login</h1>
            <div className="grid-x grid-padding-x">
              <div className="small-6 cell small-offset-3">
                <div className="callout">
                  <form onSubmit={login}>
                    <div className="grid-container">
                      <div className="grid-x grid-padding-x">
                        <div className="cell">
                          <label><h5 className="header">
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
                          <button className="button large hover" type="submit" >Submit</button>
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
  );
}

export default Login;

