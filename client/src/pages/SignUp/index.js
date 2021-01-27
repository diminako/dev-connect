
import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./style.css";


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

  const handleMultiSelect = e =>{
    const options = e.target.options;
    const selectedArray = []

    for (let i = 0; i < options.length; i++) {
      if(options[i].selected){
        selectedArray.push(options[i].value);
      }
      
    }
    setRegisterSkill(selectedArray)
  }
 
  const location = useLocation();
   


  return (
    <>
    <div className="top-bar nav">
      <div className="top-bar-left nav">
          <h1 className="navBrand">DevConnect</h1> <h5 className="header"><span>...where developers come to &lt;link&gt; up</span></h5>
        </div>
        <ul className="vertical medium-horizontal menu top-bar-right">
         {!useContext.username &&<> <li><Link to="/" className={location.pathname === "/login" ? "Login" : "nav"} ><i className="fi-list"></i><span><h3 className="nav">Login</h3></span></Link></li>
          <li><Link to="/signup" className={location.pathname === "/signup" ? "Sign Up" : "nav"}><i className="fi-list"></i><span><h3 className="nav">Sign Up</h3></span></Link></li></>}

        </ul>
      </div>

      <div className="cell background">
          <div className="grid-container">
          <div className="grid-x grid-padding-x">
              <div className="small-6 cell small-offset-3">
                <div className="callout signup-callout">
                 <h1 className="text-center header sign-up-pg">Sign Up Page</h1>
                  <form onSubmit={register}>
                    <div className="grid-container">
                      <div className=" grid-padding-x">
                        <div className="small-3 cell"></div>
                        <div className="small-6 cell">
                          <label>
                            <h4 className="header">Enter Email</h4>
                            <input onChange={e => setRegisterEmail(e.target.value)} type="text" placeholder="email" />
                          </label>
                        </div>
                      </div>
                    
                        <div className="small-3 cell"></div>
                        <div className="small-6 cell">
                          <label>
                            <h4 className="header">Enter Username</h4>
                            <input onChange={e => setRegisterUsername(e.target.value)} type="text" placeholder="username" />
                          </label>
                        </div>
                     
                      
                        <div className="small-3 cell"></div>
                        <div className="small-6 cell">
                          <label>
                            <h4 className="header">Enter Password</h4>
                            <input onChange={e => setRegisterPassword(e.target.value)} type="password" placeholder="password" />
                          </label>
                        </div>
                      
                      
                        <div className="small-3 cell"></div>
                        <div className="small-6 cell">
                          <label>
                            <h4 className="header"><span>Select Your Skills</span></h4><h5 className="header"><span> (Multiple Select Menu)</span></h5>
                          </label>
                          <label className="caveat"><h5>
                              <select onChange={handleMultiSelect} multiple>
                              <option id="skillAPI" value="API">API</option>
                              <option id="skillAJAX" value="AJAX">AJAX</option>
                              <option id="skillCSS" value="CSS">CSS</option>
                              <option id="skillHTML" value="HTML">HTML</option>
                              <option id="skillJava" value="Java">Java</option>
                              <option id="skillJavaScript" value="Javascript">Javascript</option>
                              <option id="skillJQuery" value="JQuery">JQuery</option>
                              <option id="skillMySQL" value="MySQL">MySQL</option>
                              <option id="skillMongoDB" value="MongoDB">MongoDB</option>
                              <option id="skillNodeJS" value="NodeJS">NodeJS</option>
                              <option id="skillPython" value="Python">Python</option>
                              <option id="skillReact" value="React">React</option>
                              <option id="skillSequelize" value="Sequelize">Sequelize</option>
                            </select></h5>
                          </label>
                        </div>
                      
                      <div className="small-8 cell">
                        <button className="button large signup-btn" type='submit' >Sign Up</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default SignUp;
