import React from 'react';
import Form from 'react-bootstrap/Form';

const FormInput = (props) => {
  const {controlId, label, type, placeholder, subText, value, handleChange} = props;
  return (
    <div>
      <Form>
        <Form.Group controlId={controlId}>
          <Form.Label>{label}</Form.Label>
          <Form.Control 
            type={type}
            placeholder={placeholder} 
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            />
          <Form.Text className="text-muted">
            {subText}
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  )
}

export default FormInput;
