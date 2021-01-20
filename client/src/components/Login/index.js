import React from "react";

function Login() {
  return (
    <>
      <div className="row">
        <div className="columns small-12 small-centered">
          <h1>Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <div className="callout"></div>
          <form>
            <div className="grid-container">
              <div className="grid-x grid-padding-x">
                <div className="row">
                  <div className="columns">
                    <div className="small-12 cell">
                      <label>
                        Username
                        <input type="text" placeholder="username" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="columns">
                    <div className="small-12 cell">
                      <label>
                        Password
                        <input type="text" placeholder="password" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
