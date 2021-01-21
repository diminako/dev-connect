import React from "react";


function SignUp() {
  return (
    <>
    <h1 className="text-center">Sign Up</h1>
    <div className="callout">
      <form>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="small-3 cell"></div>
            <div className="small-6 cell">
              <label>
                <h4>Enter Email</h4>
                <input type="text" placeholder="email" />
              </label>
            </div>
            </div>
          <div class="grid-x">
            <div className="small-3 cell"></div>
            <div className="small-6 cell">
              <label>
                <h4>Enter Username</h4>
                <input type="text" placeholder="username" />
              </label>
            </div>
          </div>
          <div class="grid-x">
            <div className="small-3 cell"></div>
            <div className="small-6 cell">
              <label>
                <h4>Enter Password</h4>
                <input type="text" placeholder="password" />
              </label>
            </div>
          </div>
          <div class="grid-x">
            <div className="small-3 cell"></div>
            <div className="small-6 cell">
              <label>
                <h4>Select Your Skills</h4>
              
              </label>
              <label>Multiple Select Menu
            <select multiple>
              <option value="showboat">Showboat</option>
              <option value="redwing">Redwing</option>
              <option value="narcho">Narcho</option>
              <option value="hardball">Hardball</option>
            </select>
          </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  </>
  );
}

export default SignUp;
