import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { connect } from 'react-redux'
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { setElementsData } from './actions';

const CreateDream = (props) => {
  const [email, setEmail] = useState('');
  const [elementList, setElementList] = useState([]);
  const [selectedElement, setSelectedElement] = useState('');
  const [description, setDescription] = useState('');
  const { elementsData, storeElementsData } = props;

  useEffect(() => {
    axios.get('https://send-dreams.herokuapp.com/elements')
      .then(({ data }) => {
        const elementDataObj = {};
        const elementList = [];
        data.data.forEach(element => {
          elementDataObj[element.attributes.name] = element;
          elementList.push(element.attributes.name);
        });
        storeElementsData(elementDataObj);
        setElementList(elementList);
        setSelectedElement(elementList[0]);
      });
  }, []);

  return (
    <div>
      <h1>What Does Your Dream Say?</h1>

      <FormSelect 
        controlId="CreateDreamElement" 
        label="What was the most prominent symbol in your dream?"
        options={elementList}
        value={selectedElement} 
        handleChange={setSelectedElement}/>

      <div className="createDreamDetails">
        <Image src="https://img.icons8.com/ios-glyphs/30/000000/corgi.png" rounded />
        <h2>{selectedElement}</h2>
        <p>{selectedElement ? elementsData[selectedElement].attributes.commentary : ''}</p>

        <p>If you had a good omen, you can donate your dream to give someone else good luck!</p>

        <FormInput 
          type="email" 
          isRequired={true}
          controlId="CreateDreamEmail" 
          label="Email address"
          placeholder="Enter email"
          subText="We'll never share your email with anyone else." 
          value={email} 
          handleChange={setEmail}/>

        <FormInput 
          type="text" 
          isRequired={true}
          controlId="CreateDreamDesc" 
          label="Description"
          placeholder="Enter dream description"
          subText="Describe your dream" 
          value={description} 
          handleChange={setDescription}/>

        <Button variant="primary" onClick={() => {
          axios.post('https://send-dreams.herokuapp.com/dreams', {
              email,
              element_ids: elementsData[selectedElement].id,
              description,
            })
            .then(response => console.log(response))
            .catch(err => console.log(err));
          }}>
          Donate My Dream
        </Button>
      </div>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    elementsData:state.elementsData,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    storeElementsData: (elementsData) => dispatch(setElementsData(elementsData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDream);
