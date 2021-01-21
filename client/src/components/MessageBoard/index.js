import React from "react";
import Chat from "./MBApps/Chat";
import Improvements from "./MBApps/Improvements";
import RoomName from "./MBApps/RoomName";
import Strengths from "./MBApps/Strengths";;




function MessageBoard() {
  return (
    <><div class="img"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1 className="text-center">Message Board</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container">
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