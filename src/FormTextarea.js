import React from 'react';
import { Form } from 'react-bootstrap';
import FormLabel from './FormLabel';

export default props => {
  const {
    controlId,
    label,
    rows,
    placeholder,
    subText,
    isRequired,
    value,
    handleChange,
  } = props;
  return (
    <React.Fragment>
      <Form.Group controlId={controlId}>
        <FormLabel label={label} />
        <Form.Control
          as="textarea"
          rows={rows}
          required={isRequired}
          placeholder={placeholder}
          value={value}
          onChange={e => handleChange(e.target.value)}
        />
        <Form.Text className="text-muted">{subText}</Form.Text>
      </Form.Group>
    </React.Fragment>
  );
};
