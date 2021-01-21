import React, { useState } from "react";
import axios from "axios";


const SignUp = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = (event) =>{
    event.preventDefault();
    console.log("sign up clicked");
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      // withCredentials: true,
      url: "/api/signup",
    }).then((res) => console.log(res));
  };





  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="page-header">
                    <h1 className="text-center">Sign Up Page</h1>
                   
                </div>
                <div className="callout">
            <form onSubmit={register}>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                      <div className="small-8 cell">
                        <label>
                          Username
                          <input type="text" onChange={e => setRegisterUsername(e.target.value)} placeholder="username" />
                        </label>
                      </div>
                      <div className="small-8 cell">
                        <label>
                          Password
                          <input type="password" onChange={e => setRegisterPassword(e.target.value)} placeholder="password" />
                        </label>
                      </div>
                      <div className="small-8 cell">
                        <button type='submit' >Submit</button>
                      </div>
                    </div>
                  </div>
            </form>
          </div>


            </div>

          
        </div>

    </div>
    </div>
  );
}

export default SignUp;
