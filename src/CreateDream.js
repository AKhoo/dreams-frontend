import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import TextInput from './TextInput';

const CreateDream = (props) => {
  const [email, setEmail] = useState('');
  const [element_ids, setElement_ids] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div>
      <TextInput 
        type="email" 
        controlId="CreateDreamEmail" 
        label="Email address"
        placeholder="Enter email"
        subText="We'll never share your email with anyone else." 
        value={email} 
        handleChange={setEmail}/>

      <TextInput 
        type="text" 
        controlId="CreateDreamElementIDs" 
        label="Element IDs"
        placeholder="Enter element IDs"
        subText="Comma seperated" 
        value={element_ids} 
        handleChange={setElement_ids}/>

      <TextInput 
        type="text" 
        controlId="CreateDreamTitle" 
        label="Title"
        placeholder="Enter dream title"
        value={title} 
        handleChange={setTitle}/>

      <TextInput 
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
            element_ids,
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

export default CreateDream;
