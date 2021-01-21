import React from "react";

function Login() {
  return (
    <>
      <h1 className="text-center">Login</h1>
      <div className="callout">
        <form>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="small-3 cell"></div>
              <div className="small-6 cell">
                <label>
                  <h4>Username</h4>
                  <input type="text" placeholder="username" />
                </label>
              </div>
              </div>
            <div class="grid-x">
              <div className="small-3 cell"></div>
              <div className="small-6 cell">
                <label>
                  <h4>Password</h4>
                  <input type="text" placeholder="password" />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
