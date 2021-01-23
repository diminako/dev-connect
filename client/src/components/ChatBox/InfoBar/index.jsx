import React from 'react';


import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      {/* PLACEHOLDER FOR CHAT ICON */}
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      {/* PLACEHOLDER FOR CLOSE BUTTON */}
    </div>
  </div>
);

export default InfoBar;