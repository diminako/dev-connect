import React, { useContext } from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';
import UserContext from '../../../../Store/UserContext';

const Message = ({ message, name }) => {
  let isSentByCurrentUser = false;
  const {username} = useContext(UserContext)
  if(name === username) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{name}</p>
          <div className="messageBox backgroundOrange">
            <p className="messageText colorWhite">{ReactEmoji.emojify(message)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(message)}</p>
            </div>
            <p className="sentText pl-10 ">
              {name}
              </p>
          </div>
        )
  );
}

export default Message;