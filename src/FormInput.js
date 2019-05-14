import React from 'react';
import Form from 'react-bootstrap/Form';
import FormLabel from './FormLabel';

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
      <FormLabel label={label} />
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
