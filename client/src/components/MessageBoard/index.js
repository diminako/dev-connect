import React from "react";
import Chat from "./MBApps/Chat";
import Improvements from "./MBApps/Improvements";
import RoomName from "./MBApps/RoomName";
import Strengths from "./MBApps/Strengths";


function MessageBoard() {
  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="page-header">
                    <h1 className="text-center">Message Board</h1>
                   <Chat />
                   <Improvements />
                   <RoomName />
                   <Strengths />
                </div>

            </div>

          
        </div>

    </div>
    </div>
  );
}

export default MessageBoard;