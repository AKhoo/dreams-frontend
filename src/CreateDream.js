import React from 'react';
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form';
import { MODIFY_CREATEDREAM_FORM } from './actions';

const CreateDream = (props) => {
  const modifyFormData = (param, newValue) => {
    const newFormData = JSON.parse(JSON.stringify(props.createDreamForm));
    newFormData[param] = newValue;
    props.onInputChange(newFormData);
  };
  return (
    <div>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={ props.createDreamForm.email }
            onChange={(e) => modifyFormData('email', e.target.value)}
            />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  )
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    onInputChange: data => {
      dispatch(MODIFY_CREATEDREAM_FORM(data));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateDream);
