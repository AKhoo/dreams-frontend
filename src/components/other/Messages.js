import React from 'react';
import Message from './Message';

const Messages = props => {
  const { messages } = props;
  return (
    <React.Fragment>
      {messages.map((message, index) => (
        <Message
          key={index}
          text={message.text}
          variant={message.alertVariant}
          index={index}
        />
      ))}
    </React.Fragment>
  );
};

export default Messages;
