import React from 'react';

// import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

import './Messages.css';

const Messages = ({ messages }) => (
//   <ScrollToBottom className="messages">
<>
    {console.log(messages)}
    {messages.map((message, i) => <div key={i}><Message message={message.body} name={message.username} /></div>)}
    </>
//   </ScrollToBottom>
);

export default Messages;