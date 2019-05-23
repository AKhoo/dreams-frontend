import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';

const Messages = props => {
  const { messages } = props;
  return messages.map((message, index) => (
    <Message
      key={'message' + index}
      text={message.text}
      variant={message.alertVariant}
      index={index}
    />
  ));
};

const mapStateToProps = ({ messages }) => {
  return {
    messages,
  };
};

export default connect(mapStateToProps)(Messages);
