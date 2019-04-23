import React from 'react';
import Form from 'react-bootstrap/Form';

const FormSelect = (props) => {
  const {controlId, label, options, value, handleChange} = props;
  return (
    <div>
      <Form>
        <Form.Group controlId={controlId}>
          <Form.Label>{label}</Form.Label>
          <Form.Control 
            as="select" 
            value={value}
            onChange={(e) => handleChange(e.target.value)}>
            {Object.keys(options).map((elementId) => {
              return <option key={elementId}>{options[elementId].attributes.name}</option>
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  )
}

export default FormSelect;
