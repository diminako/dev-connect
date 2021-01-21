import React from "react";


function SignUp() {
  return (
    <>
    <img className="bg" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-193-ae-00070.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a642750a6aa2bf3ff96e964c924dab97" />

     <div className="grid-container">
            
              <div className="small-1 cell"></div>
              <div className="small-10 cell">
    <div className="callout">
      <form>
        <div className="grid-container">
        <h1 className="text-center pg-header">Sign Up</h1>
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
    </div>
   </div>
  </>
  );
}

export default SignUp;
