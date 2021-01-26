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
        {/* I had to add the index on top of the message.id because of the workaround when we got duplicate messages. */}
        {messages.map((message, i) => <div key={message._id + i}><Message message={message.body} name={message.username} /></div>)}
    </div>
    </ScrollToBottom>
        );
}

export default Messages;