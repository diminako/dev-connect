import React, { useState, useEffect, useRef, useContext } from 'react';
import InfoBar from "./InfoBar";
import Messages from "./Messages";
import Input from "./Input";
import io from "socket.io-client";
import UserContext from '../../Store/UserContext';
import "./index.css";
// import axios from "axios";
import API from "../../utils/chatAPI";

const ChatBox = (props) => {

    const {username} = useContext(UserContext);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    const sendMessage = (e) => {
        e.preventDefault();
        const messages = {
            body: message,
            type:  props.type || "message",
            username
        };

        socketRef.current.emit("send", messages, () => setMessage(""));

        socketRef.current.on(props.type ? props.type : "message", (eachMessage) => {
            setMessages(curr => {
                if(curr[curr.length - 1]._id !== eachMessage._id){
                    return[...curr, eachMessage]
                }
                return curr
                })
         })
    }


      const loadMessages = () => {
        // console.log("HEY")
        API.getMessages(props.type)
          .then(res => {
            // console.log(res.data)
            setMessages(res.data);
            console.log("loaded data!")

            const welcome = { body: `Welcome ${username} to the ${props.type} room!` }
            setMessages(curr => ([...curr, welcome]));
          }
          )
          .catch(err => console.log(props.type + "err" + err));
      };
    

    useEffect(()=>{
        socketRef.current = io.connect('/');
        socketRef.current.on("your id", id => {
            // console.log(id, "id");
        });

    }, [])

    useEffect(() => {
        loadMessages()
    }, [props.type]);

    return (
        <div className="messageWrapper">
                <InfoBar 
                room={props.type} />
                <Messages 
                messages={messages} />
                <Input 
                message={message} 
                setMessage={setMessage} 
                sendMessage={sendMessage} />
        </div>
    )
}

export default ChatBox;