import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Image, Form } from 'react-bootstrap';
import FormInput from '../forms/FormInput';
import FormTextarea from '../forms/FormTextarea';
import ElementSelect from '../forms/ElementSelect';

import { getAndStoreElements, postDream, addMessage } from '../../actions';

const CreateDream = props => {
  const { elementsData, addSuccessMessage } = props;

  const elementsDataLength = Object.keys(elementsData).length;
  const elementsDataFirstElement = elementsDataLength
    ? elementsData[Object.keys(elementsData)[0]]
    : null;

  const [email, setEmail] = useState('');
  const [selectedElement, setSelectedElement] = useState({
    name: elementsDataFirstElement
      ? elementsDataFirstElement.attributes.name
      : '',
    id: elementsDataFirstElement ? elementsDataFirstElement.id : '',
  });
  const [description, setDescription] = useState('');

  useEffect(() => {
    getAndStoreElements();
  }, []);

  return (
    <div>
      <h1>What Does Your Dream Say?</h1>

      <ElementSelect
        controlId="CreateDreamElement"
        label="What was the most prominent symbol in your dream?"
        options={elementsData}
        selectedElement={selectedElement}
        handleChange={setSelectedElement}
      />

      <div className="createDreamDetails">
        <Image
          src="https://img.icons8.com/ios-glyphs/30/000000/corgi.png"
          rounded
        />
        <h2>{selectedElement.name}</h2>
        <p>
          {elementsData[selectedElement.id]
            ? elementsData[selectedElement.id].attributes.commentary
            : ''}
        </p>

        <p>
          If you had a good omen, you can donate your dream to give someone else
          good luck!
        </p>

        <Form
          onSubmit={e => {
            e.preventDefault();
            postDream({
              email,
              element_ids: selectedElement.id,
              description,
            }).then(() => {
              addSuccessMessage('Dream successfully submitted. Thank you!');
              setEmail('');
              setDescription('');
            });
          }}
        >
          <FormInput
            type="email"
            isRequired={true}
            controlId="CreateDreamEmail"
            label="Email address"
            placeholder="Enter email"
            subText="We'll never share your email with anyone else."
            value={email}
            handleChange={setEmail}
          />

          <FormTextarea
            rows={3}
            isRequired={true}
            controlId="CreateDreamDesc"
            label="Description"
            placeholder="Enter dream description"
            subText="Describe your dream"
            value={description}
            handleChange={setDescription}
          />

          <Button type="submit" variant="primary">
            Donate My Dream
          </Button>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ elementsData }) => {
  return {
    elementsData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addSuccessMessage: text => dispatch(addMessage(text, 'success')),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateDream);
