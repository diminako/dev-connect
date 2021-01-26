import React, { useContext, useState } from "react";
import ChatBox from "../ChatBox";
import Improvements from "./MBApps/Improvements";
import Strengths from "./MBApps/Strengths";
import OnlineMembers from "./MBApps/OnlineMembers";
import UserContext from "../../Store/UserContext";
import { Redirect } from "react-router";



const MessageBoard = () => {
  const { username } = useContext(UserContext);
  const [selectedRoom, setSelectedRoom] = useState("HTML CSS");

  const rooms = [
    "HTML CSS",
    "JavaScript",
    "NodeJS",
    "Database"
  ];
  
  const changeRoom = (e, room) => {
    e.preventDefault();

    setSelectedRoom(room);
  }

  return (
  username ? (
    
      <div className="container green">
      <div className="grid-container">
        <h1 className="text-center mb-header header">Message Board</h1>
        <div className="grid-x grid-padding-x">
          <div className="medium-3 cell">
            <div className="callout">
              <Strengths />
            </div>
          </div>
          <div className="medium-6 cell">
            <div className="callout">
              <h2 className="text-center header">Profile</h2>
              <p className="text-center h3">{username}</p>
            </div>
          </div>
          <div className="medium-3 cell">
            <div className="callout">
              <Improvements />
            </div>
          </div>
        </div>
      </div>
      <div className="grid-y medium-grid-frame">
        <div className="cell medium-auto medium-cell-block-container">
          <div className="grid-x grid-padding-x">
            <div className="cell medium-3 medium-cell-block-y">
              <OnlineMembers />
            </div>
            <div className="cell medium-6">
              <div className="callout">
                <div className="stacked-for-small button-group">
                {
                rooms.map((room, i) =>
                    <button
                      key={i}
                      type="button"
                      className={`button ${(room === selectedRoom ? "secondary" : "primary")}`}
                      name={room}
                      onClick={(e) => changeRoom(e, room)}>
                      {room}
                    </button>
                )}
                </div>
                <ChatBox type={selectedRoom} />
              </div>
            </div>
            <div className="cell medium-3">
                <p>
                  <img alt="laptop" src="https://images.unsplash.com/photo-1591610768799-74d796271fb3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcHRvcCUyMGtleWJvYXJkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                  </p>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="medium-2 cell"></div>
            <div className="medium-8 cell">
              <hr />
            </div>
          </div>
        </div>
        </div>
        </div>
    )
    :<Redirect to = "/"/>
  );
}

export default MessageBoard;