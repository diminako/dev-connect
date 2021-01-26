import React from 'react';
import Message from './Message';
import './Messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';

// const debug = {
//     debug:false
// }

const Messages = ({ messages }) => {
 
    return(
        <ScrollToBottom className="messages">
    <div 
    className="messages">
        {messages.map((message, i) => <div key={i}><Message message={message.body} name={message.username} /></div>)}
    </div>
    </ScrollToBottom>
        );
}

export default Messages;