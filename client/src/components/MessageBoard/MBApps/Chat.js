import React from "react";
import Improvements from "Improvements";
import Strengths from "Strengths";

function Chat() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="small-3 cell">
            <div className="callout primary">
              <h5>Strengths</h5>
              <Strengths />
            </div>
          </div>
          <div className="small-6 cell">
            <div className="callout ">
            <Improvements />
            </div>
          </div>
          <div className="small-3 cell">
            <div className="callout primary">
              <h5>This is a secondary callout</h5>
              <p>It has an easy to override visual style, and is appropriately subdued.</p>
              <a href="#">It's dangerous to go alone, take this.</a>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Chat;