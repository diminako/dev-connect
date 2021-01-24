import React, { useState, useEffect, useRef, useContext } from 'react';
import InfoBar from "./InfoBar";
import Messages from "./Messages";
import Input from "./Input";
import io from "socket.io-client";
import UserContext from '../../Store/UserContext';
import "./index.css";

const ChatBox = (props) => {

    const {username} = useContext(UserContext);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const socketRef = useRef();

    const sendMessage = (e) => {
        e.preventDefault();
        const messages = {
            body: message,
            id: "",
            type:  props.type || "message",
            username
        };
        console.log(messages);
        socketRef.current.emit("send", messages, () => setMessage(""));
    }

    useEffect(() => {
        socketRef.current = io.connect('/');
        socketRef.current.on("your id", id => {
            console.log(id, "id");
        })
        socketRef.current.on(props.type ? props.type : "message", (message) => {
            setMessages(curr => ([...curr, message]))
        })
    }, []);


    return (
        <div>
            <div className="container">
                <InfoBar room={props.type} />
                <Messages messages={messages} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default ChatBox;