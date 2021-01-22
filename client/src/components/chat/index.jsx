import React, { useState, useEffect, useRef } from 'react'
import io from "socket.io-client";
const Chat = () => {
    const [yourID, setYourID] = useState("");
    const [msgArray, setMsgArray] = useState([]);
    const [message, setMessage] =useState("");
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect('/');
        console.log('user')
        socketRef.current.on("your id", id => {
            console.log(id, "id")
          setYourID(id);
        })
    
        socketRef.current.on("message", (message) => {
          console.log("here");
          setMsgArray(curr=>([...curr, message.body]))

        })
      }, []);

      const sendMessage =()=>{
          console.log("testing")
        const messageObject = {
            body: message,
            id: yourID,
          };

          socketRef.current.emit("send message", messageObject);
      }

    return (
        <div>
            <h2>JavaScript Chatroom</h2>
            <div>
            <ul>
            {msgArray && msgArray.map(msg=>(<li>{msg}</li>))}
            </ul>
            <input type="text" onChange={e=>setMessage(e.target.value)} value={message}/>
            <button onClick={sendMessage}>submit</button>
            </div>
        </div>
    )
}

export default Chat;