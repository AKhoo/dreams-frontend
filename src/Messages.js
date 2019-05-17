import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = ({ messages }) => {
  return {
    messages,
  };
};

export default connect(mapStateToProps)(Messages);
