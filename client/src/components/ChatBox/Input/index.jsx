import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form"
  onSubmit={e => sendMessage(e)}
  >
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
    />
    <button className="sendButton" >Send</button>
  </form>
)

export default Input;