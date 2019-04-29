import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import ElementSelect from './ElementSelect';
import { setElementsData, getElements, postDream } from './actions';

const CreateDream = (props) => {
  const [email, setEmail] = useState('');
  const [selectedElement, setSelectedElement] = useState({
    name: '',
    id: '',
  });
  const [description, setDescription] = useState('');
  const {elementsData, storeElementsData} = props;

  useEffect(() => {
    getElements()
      .then(({ data }) => {
        const elementDataObj = {};
        data.data.forEach(element => {
          elementDataObj[element.id] = element;
        });
        storeElementsData(elementDataObj);
        setSelectedElement({
          name: data.data[0].attributes.name,
          id: data.data[0].id,
        });
      });
  }, []);

  return (
    <div>
      <h1>What Does Your Dream Say?</h1>

      <ElementSelect 
        controlId="CreateDreamElement" 
        label="What was the most prominent symbol in your dream?"
        options={elementsData}
        selectedElement={selectedElement} 
        handleChange={setSelectedElement}/>

      <div className="createDreamDetails">
        <Image src="https://img.icons8.com/ios-glyphs/30/000000/corgi.png" rounded />
        <h2>{selectedElement.name}</h2>
        <p>{elementsData[selectedElement.id] ? elementsData[selectedElement.id].attributes.commentary : ''}</p>

        <p>If you had a good omen, you can donate your dream to give someone else good luck!</p>

        <Form
          onSubmit = {(e) => {
            e.preventDefault();
            postDream({
              email,
              element_ids: selectedElement.id,
              description,
            })
              .then(response => console.log(response))
              .catch(err => console.log(err));
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
            handleChange={setEmail}/>

          <FormTextarea 
            rows={3} 
            isRequired={true}
            controlId="CreateDreamDesc" 
            label="Description"
            placeholder="Enter dream description"
            subText="Describe your dream" 
            value={description} 
            handleChange={setDescription}/>

          <Button type="submit" variant="primary">
            Donate My Dream
          </Button>
        </Form>
      </div>

    </div>
  )
}

const mapStateToProps = ({elementsData}) => {
  return {
    elementsData,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    storeElementsData: (elementsData) => dispatch(setElementsData(elementsData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDream);
