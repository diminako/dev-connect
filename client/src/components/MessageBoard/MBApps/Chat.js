import React from "react";


function Chat() {
  return (
    <>
      <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="small-1 cell"></div>
        <div className="small-10 cell">
          <div className="callout">
            <div className="card">
            <div className="card-divider">
              <h5 className="text-center">Chat</h5>
              </div>
              <div className="card-section">
                <div className="input-group">
                    <textarea className="chat-box" placeholder="Enter text here"></textarea>
                    </div>
                      <input type="submit" className="button" value="Submit"></input>
                  </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Chat;