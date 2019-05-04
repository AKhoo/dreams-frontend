import React from 'react';
import Form from 'react-bootstrap/Form';

const FormInput = props => {
  const {
    controlId,
    label,
    type,
    placeholder,
    subText,
    isRequired,
    value,
    handleChange,
  } = props;
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        required={isRequired}
        placeholder={placeholder}
        value={value}
        onChange={e => handleChange(e.target.value)}
      />
      <Form.Text className="text-muted">{subText}</Form.Text>
    </Form.Group>
  );
};

export default FormInput;
