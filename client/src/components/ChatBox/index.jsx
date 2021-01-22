import React, { useState, useEffect, useRef, useContext } from 'react';
import InfoBar from "./InfoBar";
import Messages from "./Messages";
import Input from "./Input"
import TextContainer from "./TextContainer";
import io from "socket.io-client";
import axios from "axios";
import UserContext from '../../Store/UserContext';



const ChatBox = (props) => {

    const {username} = useContext(UserContext)
    const [name, setName] = useState('');
    const [room, setRoom] = useState('JavaScript');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    ////////////////////////// TESTING///////////
    const [data, setData] = useState(null);


    /////////////////// LEGACY CODE
    // const [yourID, setYourID] = useState("");
    // const [msgArray, setMsgArray] = useState([]);
    // // const [message, setMessage] = useState("");
    const socketRef = useRef();

    // useEffect(() => {
    //     socketRef.current = io.connect('/');
    //     console.log('user')
    //     socketRef.current.on("your id", id => {
    //         console.log(id, "id")
    //         setYourID(id);
    //     })

    //     socketRef.current.on("message", (message) => {
    //         console.log("here");
    //         setMsgArray(curr => ([...curr, message.body]))

    //     })
    // }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        const messages = {
            body: message,
            id: name,
            type:  props.type || "message",
            username
        };
        console.log(messages)
        socketRef.current.emit("send", messages);
    }

    useEffect(() => {
        ///////////////////////////////////////////////////


        ///////////////////////////////////////////////////
        socketRef.current = io.connect('/');
        console.log('user')
        socketRef.current.on("your id", id => {
            console.log(id, "id")
            // setName(messages.username);
        })

        socketRef.current.on(props.type ? props.type : "message", (message) => {
            console.log("here");
            setMessages(curr => ([...curr, message]))

        })
    }, []);

    return (
        <div>
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer users={users} />



            {/* <div>
                <ul>
                    {msgArray && msgArray.map((msg, index )=> (<li key={index}>{msg}</li>))}
                </ul>
                <input type="text" onChange={e => setMessage(e.target.value)} value={message} />
                <button onClick={sendMessage}>submit</button>
            </div> */}
        </div>
    )
}

export default ChatBox;