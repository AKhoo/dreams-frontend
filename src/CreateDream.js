import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { connect } from 'react-redux'
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { setElementsData } from './actions';

const CreateDream = (props) => {
  const [email, setEmail] = useState('');
  const [elementList, setElementList] = useState([]);
  const [selectedElement, setSelectedElement] = useState('');
  const [title, setTitle] = useState('');
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
      });
  }, []);

  return (
    <div>
      <FormInput 
        type="email" 
        controlId="CreateDreamEmail" 
        label="Email address"
        placeholder="Enter email"
        subText="We'll never share your email with anyone else." 
        value={email} 
        handleChange={setEmail}/>

      <FormSelect 
        controlId="CreateDreamElement" 
        label="Primary Element"
        options={elementList}
        value={selectedElement} 
        handleChange={setSelectedElement}/>

      <FormInput 
        type="text" 
        controlId="CreateDreamTitle" 
        label="Title"
        placeholder="Enter dream title"
        value={title} 
        handleChange={setTitle}/>

      <FormInput 
        type="text" 
        controlId="CreateDreamDesc" 
        label="Description"
        placeholder="Enter dream description"
        subText="Optional" 
        value={description} 
        handleChange={setDescription}/>

      <Button variant="primary" onClick={() => {
        axios.post('https://send-dreams.herokuapp.com/dreams', {
            email,
            element_ids: elementsData[selectedElement].id,
            title,
            description,
          })
          .then(response => console.log(response))
          .catch(err => console.log(err));
        }}>
        Submit
      </Button>
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
