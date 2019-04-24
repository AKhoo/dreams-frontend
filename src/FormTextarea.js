import React from 'react';
import Form from 'react-bootstrap/Form';

const FormTextarea = (props) => {
  const {controlId, label, rows, placeholder, subText, isRequired, value, handleChange} = props;
  return (
    <React.Fragment>
      <Form.Group controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control 
          as="textarea"
          rows={rows}
          required={isRequired}
          placeholder={placeholder} 
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          />
        <Form.Text className="text-muted">
          {subText}
        </Form.Text>
      </Form.Group>
    </React.Fragment>
  )
}

export default FormTextarea;
