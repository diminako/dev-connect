import React from "react";
import ChatBox from "../../ChatBox"

function Chat() {
  return (
    <>
      {/* <div className="grid-container chat">
      <div className="grid-x grid-padding-x">
        <div className="small-3 cell"></div>
        <div className="small-9 cell"> */}
            <ChatBox />
            {/* <div className="card-divider">
              <h5 className="text-center header">Chat</h5>
              </div>
              <div className="card-section">
                <div className="input-group">
                    <textarea className="chat-box header" placeholder="Enter text here"></textarea>
                    </div>
                      <input type="submit" className="button large" value="Submit"></input>
                  </div> */}
              {/* </div>
            </div>
      </div>*/}
    </> 
  );
}

export default Chat;