import React, { useContext, useState } from "react";
import ChatBox from "../../components/ChatBox";
import Improvements from "./MBApps/Improvements";
import Strengths from "./MBApps/Strengths";
import OnlineMembers from "./MBApps/OnlineMembers";
import UserContext from "../../Store/UserContext";
import { Redirect } from "react-router";
import NavTabs from "../../components/NavTabs";



const MessageBoard = () => {
  const { username } = useContext(UserContext);
  const [selectedRoom, setSelectedRoom] = useState("HTML CSS");
  const [onlineUsers, setOnlineUsers] = useState([]);
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
     <>
     <NavTabs />
      <div className="container background-color">
      
          <div className="cell">
            <div className="callout profile-callout">
              <h2 className="text-center header profile">Profile</h2>
              <p className="text-center h3 username">{username}</p>
            </div>
          </div>
        
      
      <div className="grid-y medium-grid-frame">
        <div className="cell medium-auto medium-cell-block-container">
          <div className="grid-x grid-padding-x">
            <div className="cell medium-3 medium-cell-block-y">
              <OnlineMembers onlineUsers = {onlineUsers}/>
            </div>
            <div className="cell medium-6">
              <div className="callout">
                <div className="stacked-for-small button-group">
                {
                rooms.map((room, i) =>
                    <button
                      key={i}
                      type="button"
                      className={`button ${(room === selectedRoom ? "secondary" : "orange-btn")}`}
                      name={room}
                      onClick={(e) => changeRoom(e, room)}>
                      {room}
                    </button>
                )}
                </div>
                <ChatBox type={selectedRoom} setOnlineUsers={setOnlineUsers}/>
              </div>
            </div>
            <div className="cell medium-3">
             <div className="medium-3 cell">
               <div className="callout">
                 <Strengths />
               </div>
             </div>
             <div className="medium-3 cell">
                <div className="callout">
                  <Improvements />
                </div>
              </div>
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
        </>
    )
    :<Redirect to = "/"/>
  );
}

export default MessageBoard;