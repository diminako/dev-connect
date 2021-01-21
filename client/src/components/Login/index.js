import React, { useState } from "react";
import axios from "axios";


const  Login = () => {

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const login = (event) =>{
    event.preventDefault();
    console.log("login click")
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/api/",
    }).then((res) => console.log(res));

  };



  return (
    <>
  

          <h1 className="align-right">Login</h1>
      
          <div className="callout">
            <form onSubmit={login}>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                      <div className="small-8 cell">
                        <label>
                          Username
                          <input type="text" onChange={e => setLoginUsername(e.target.value)} placeholder="username" />
                        </label>
                      </div>
                      <div className="small-8 cell">
                        <label>
                          Password
                          <input type="password" onChange={e => setLoginPassword(e.target.value)} placeholder="password" />
                        </label>
                      </div>
                      <div className="small-8 cell">
                        <button type="submit" >Submit</button>
                      </div>
                    </div>
                  </div>
            </form>
          </div>
        
    </>
  );
}

export default Login;
