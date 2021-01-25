import React, { useState, useEffect, useRef, useContext } from 'react';
import InfoBar from "./InfoBar";
import Messages from "./Messages";
import Input from "./Input";
import io from "socket.io-client";
import UserContext from '../../Store/UserContext';
import "./index.css";
import axios from "axios";
import API from "../../utils/chatAPI";

const ChatBox = (props) => {

    const {username} = useContext(UserContext);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [type, setType] = useState("message");
    const socketRef = useRef();

    const sendMessage = (e) => {
        e.preventDefault();
        const messages = {
            body: message,
            type:  props.type || "message",
            username
        };

        socketRef.current.emit("send", messages, () => setMessage(""));
    }

    /////////////////////////////////////
 
      const loadMessages = () => {
        console.log("HEY")
        API.getMessages(props.type)
          .then(res => {
            console.log(res.data)
            setMessages(res.data)
          }
          )
          .catch(err => console.log(err));
      };
      // Loads all books and sets them to books
    ////////////////////////////////////


    useEffect(()=>{
        socketRef.current = io.connect('/');
        socketRef.current.on("your id", id => {
            console.log(id, "id");
        });

    }, [])

    useEffect(() => {
        console.log(props.type)
        setType(props.type);
        loadMessages()
        socketRef.current.on(props.type ? props.type : "message", (eachMessage) => {
            setMessages(curr => ([...curr, eachMessage]))
        })
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