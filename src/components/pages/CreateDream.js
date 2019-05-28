import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Image, Form } from 'react-bootstrap';

import SpinnerModal from '../other/SpinnerModal';
import CreateDreamModal from '../other/CreateDreamModal';
import GuideElement from '../other/GuideElement';
import FormInput from '../forms/FormInput';
import FormTextarea from '../forms/FormTextarea';
import ElementSelect from '../forms/ElementSelect';

import { getAndStoreElements, postDream, addMessage } from '../../actions';

const CreateDream = props => {
  const { elementsData, addSuccessMessage } = props;

  const elementsArray = elementsData.data ? Object.values(elementsData.data) : null;

  const elementsDataFirstElement = elementsData.data
    ? elementsData.data[Object.keys(elementsData.data)[0]]
    : null;

  const [email, setEmail] = useState('');
  const [selectedElement, setSelectedElement] = useState({name: null,id: null});
  const [description, setDescription] = useState('');
  
  useEffect(() => {
    if (!elementsData.data) {
      getAndStoreElements();
    };
  }, []);

  // if (elementsData.data & !selectedElement.id) {
  //   setSelectedElement({
  //     name: elementsDataFirstElement.attributes.name,
  //     id: elementsDataFirstElement.id,
  //   });
  // }
  
  return (
    <div>
      <SpinnerModal loadState={elementsData.loadState}/>

      <h1>Capture Your Dream</h1>
      <p>What does your dream say? It could be a prediction about the future.</p>
      <p>In Korean dream interpretation, there are good dreams (길몽), bad dreams (흉몽), and nightmares (악몽). There are also “conception dreams” (태몽), which are dreams a woman (or another woman very close to her) has when she gets pregnant.</p>
      <p>For an omen to apply, it must be a major element of your dream. Your dream also needs to have a coherent thread. If your dream is very scattered and without sequence, then it is known as a “dog dream” (개꿈), which is a dream without special meaning.</p>

      <div className="bodyContentBox">
        <h2>Good Omens</h2>
        <p>If your dream includes one of the symbols below, congratulations!</p>
        <p>You can keep your dream a secret to retain the good fortune, or you can donate it for others to benefit by telling us the details of your dream.</p>
        {elementsArray 
          ? elementsArray.map(element => <GuideElement element={element} withButton={true} handleClick={setSelectedElement} key={element.id}/>) 
          : null}
      </div>

      <CreateDreamModal selectedElement={selectedElement}/>

      <ElementSelect
        controlId="CreateDreamElement"
        label="What was the most prominent symbol in your dream?"
        options={elementsData.data ? elementsData.data : {}}
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
          {selectedElement.id
            ? elementsData.data[selectedElement.id].attributes.commentary
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
