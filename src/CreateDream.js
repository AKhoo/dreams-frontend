import React from 'react';
import Form from 'react-bootstrap/Form';

const CreateDream = (props) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  )
}

export default CreateDream;
