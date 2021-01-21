import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Login = () => {

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const history = useHistory();

  const login = (event) => {
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
    }).then((res) => {

      console.log(res);

      if (res.data === "successfully authenticated"){

        history.push("/message");
      }
    })
    

  };



  return (
    <>
      <h1 className="align-right">Login</h1>
      <img className="bg" alt="teamwork" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-193-ae-00070.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a642750a6aa2bf3ff96e964c924dab97" ></img>
      <div className="grid-container log">
        <div className="grid-x grid-padding-x">
          <div className="small-1 cell"></div>
          <div className="small-10 cell">
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


          </div>
        </div>
      </div>
      {/* <form>
                <h1 className="text-center pg-header">Login</h1>
                <div className="grid-container">
                  <div className="grid-x grid-padding-x">
                    <div className="small-3 cell"></div>
                    <div className="small-6 cell">
                      <label>
                        <h4 className="text-center">Username</h4>
                        <input type="text" placeholder="username" />
                      </label>
                    </div>
                  </div>
                  <div className="grid-x">
                    <div className="small-3 cell"></div>
                    <div className="small-6 cell">
                      <label>
                        <h4 className="text-center">Password</h4>
                        <input type="text" placeholder="password" />
                      </label>
                    </div>
                  </div>
                  </div>
                  </form> */}


      {/* <div className="callout">
        </div> */}
    </>
  );
}

export default Login;
