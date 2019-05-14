import React from 'react';
import Form from 'react-bootstrap/Form';

const FormLabel = props => {
  const { label } = props;
  if (label) {
    return (
      <Form.Label>
        {label}
      </Form.Label>
    );
  } else {
    return (
      <React.Fragment />
    )
  }
};

export default FormLabel;
