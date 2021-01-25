import React, { useState, useEffect, useRef, useContext } from 'react';
import InfoBar from "./InfoBar";
import Messages from "./Messages";
import Input from "./Input";
import io from "socket.io-client";
import UserContext from '../../Store/UserContext';
import "./index.css";
import axios from "axios";

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
        console.log(messages);

        axios({
            method: "POST",
            messages: {
                body: message,
                type: props.type,
                username
            },
            url: "/api/chats",
          }).then((res) => {
            console.log(messages);
          })

        socketRef.current.emit("send", messages, () => setMessage(""));
    }

    useEffect(()=>{
        socketRef.current = io.connect('/');
        socketRef.current.on("your id", id => {
            console.log(id, "id");
        })
    }, [])

    useEffect(() => {
        console.log(props.type)
        setType(props.type);
        socketRef.current.on(props.type ? props.type : "message", (eachMessage) => {
            setMessages(curr => ([...curr, eachMessage]))
        })
        
    }, [props.type]);
    

    return (
        <div>
            <div className="container">
                <InfoBar 
                room={props.type} />
                <Messages 
                messages={messages} />
                <Input 
                message={message} 
                setMessage={setMessage} 
                sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default ChatBox;