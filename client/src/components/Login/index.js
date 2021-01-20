import React from "react";

function Login() {
  return (
    <>
  

          <h1 class="align-right">Login</h1>
      
          <div className="callout">
            <form>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                      <div className="small-8 cell">
                        <label>
                          Username
                          <input type="text" placeholder="username" />
                        </label>
                      </div>
                      <div className="small-8 cell">
                        <label>
                          Password
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
