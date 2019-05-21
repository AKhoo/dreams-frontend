import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Message = props => {
  const { variant, text } = props;
  const [show, setShow] = useState(true);
  return (
    <Alert
      dismissible
      variant={variant}
      show={show}
      onClose={() => setShow(false)}
    >
      {text}
    </Alert>
  );
};

export default Message;
