import React from "react";


function RoomName() {
  return (
    <>
    <div class="text-center"> 
    </div>
    <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="small cell">
            <div className="callout primary">
              <h5 class="text-center">Current Room</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="small cell">
          <div className="callout primary">
            <h5 class="text-center">Chat</h5>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default RoomName;