import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const SignUp = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerSkill, setRegisterSkill] = useState([]);
  const [registerEmail, setRegisterEmail] = useState("");

  const history = useHistory();

  const register = (event) => {
    event.preventDefault();
    console.log("sign up clicked");
    axios({
      method: "POST",
      data: {
        email: registerEmail,
        username: registerUsername,
        password: registerPassword,
        skill: registerSkill
      },
      // withCredentials: true,
      url: "/api/signup",
    }).then((res) => {

      console.log(res);
      history.push("/");
    })
    
  };





  return (
    <div>
      <img className="bg" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-193-ae-00070.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a642750a6aa2bf3ff96e964c924dab97" alt="teamwork"></img>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1 className="text-center">Sign Up Page</h1>

            </div>


            <div className="grid-container">

              <div className="small-1 cell"></div>
              <div className="small-10 cell">
                <div className="callout">
                  <form onSubmit={register}>
                    <div className="grid-container">
                      <h1 className="text-center pg-header">Sign Up</h1>
                      <div className="grid-x grid-padding-x">
                        <div className="small-3 cell"></div>
                        <div className="small-6 cell">
                          <label>
                            <h4>Enter Email</h4>
                            <input onChange={e => setRegisterEmail(e.target.value)} type="text" placeholder="email" />
                          </label>
                        </div>
                      </div>
                      <div className="grid-x">
                        <div className="small-3 cell"></div>
                        <div className="small-6 cell">
                          <label>
                            <h4>Enter Username</h4>
                            <input onChange={e => setRegisterUsername(e.target.value)} type="text" placeholder="username" />
                          </label>
                        </div>
                      </div>
                      <div className="grid-x">
                        <div className="small-3 cell"></div>
                        <div className="small-6 cell">
                          <label>
                            <h4>Enter Password</h4>
                            <input onChange={e => setRegisterPassword(e.target.value)} type="password" placeholder="password" />
                          </label>
                        </div>
                      </div>
                      <div className="grid-x">
                        <div className="small-3 cell"></div>
                        <div className="small-6 cell">
                          <label>
                            <h4>Select Your Skills</h4>
                          </label>
                          <label>Multiple Select Menu
                              <select onChange={e => setRegisterSkill(e.target.value)} multiple>
                              <option value="showboat">Showboat</option>
                              <option value="redwing">Redwing</option>
                              <option value="narcho">Narcho</option>
                              <option value="hardball">Hardball</option>
                            </select>
                          </label>
                        </div>
                      </div>
                      <div className="small-8 cell">
                        <button type='submit' >Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* <div className="callout">
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
              </div> */}
    </div>
  );
}

export default SignUp;
