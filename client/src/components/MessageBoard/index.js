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
    // setSelectedRoom(e.target.value);
    setSelectedRoom(room);
  }

  return (
  username ? (
    <>
      <img className="bg" alt="teamwork " src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-193-ae-00070.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a642750a6aa2bf3ff96e964c924dab97" />
      <div className="grid-container fluid">
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
              <p className="text-center">{username}</p>
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
                rooms.map(room =>
                    <button
                      type="button"
                      className="button primary"
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
              <div className="callout mb-image">
                <p>
                  <img alt="laptop" src="data:image/jpeg;base64,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"></img>
                </p>
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
        </div></div>
    </>)
    :<Redirect to = "/"/>
  );
}

export default MessageBoard;