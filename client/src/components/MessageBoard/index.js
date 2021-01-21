import React from "react";
import Chat from "./MBApps/Chat";
import Improvements from "./MBApps/Improvements";
import RoomName from "./MBApps/RoomName";
import Strengths from "./MBApps/Strengths";;




function MessageBoard() {
  return (
    <> 
    <img className="bg" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-193-ae-00070.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a642750a6aa2bf3ff96e964c924dab97" />
          <div className="col-md-12">
            <div className="page-header">
            </div>
          </div>
        
      <div className="grid-container">
      <h1 className="text-center mb-header">Message Board</h1>

        <div className="grid-x grid-padding-x">
          <div className="small-3 cell">
            <div className="callout primary">
              <h5>Strengths</h5>
              <Strengths />
            </div>
          </div>
          <div className="small-6 cell">
            <div className="callout">
              <h2 class="text-center">Profile</h2>
              <p class="text-center">username</p>
            </div>
          </div>
          <div className="small-3 cell">
            <div className="callout primary">
              <Improvements />
            </div>
          </div>
        </div>
      </div>
      <RoomName />
    </>
  );
}

export default MessageBoard;