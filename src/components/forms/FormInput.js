import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

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
    <Form.Group as={Row} controlId={controlId}>
      {label && (
        <Form.Label column sm="4">
          {label}
        </Form.Label>
      )}
      <Col sm="6">
        <Form.Control
          type={type}
          required={isRequired}
          placeholder={placeholder}
          value={value}
          onChange={e => handleChange(e.target.value)}
        />
        <Form.Text className="text-muted">{subText}</Form.Text>
      </Col>
    </Form.Group>
  );
};

export default FormInput;
