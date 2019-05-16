import React from 'react';
import { Form } from 'react-bootstrap';

const ElementSelect = props => {
  const { controlId, label, options, selectedElement, handleChange } = props;
  return (
    <React.Fragment>
      <Form.Group controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as="select"
          value={selectedElement.name}
          onChange={e => {
            const selectedIndex = e.nativeEvent.target.selectedIndex;
            handleChange({
              name: e.target.value,
              id: e.nativeEvent.target[selectedIndex].id,
            });
          }}
        >
          {Object.keys(options).map(elementId => {
            return (
              <option id={elementId} key={elementId}>
                {options[elementId].attributes.name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    </React.Fragment>
  );
};

export default ElementSelect;
