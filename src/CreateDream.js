import React, { useState } from 'react';
import TextInput from './TextInput';

const CreateDream = (props) => {
  const [email, setEmail] = useState('');
  const [elementIDs, setElementIDs] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
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
        value={elementIDs} 
        handleChange={setElementIDs}/>

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
        value={desc} 
        handleChange={setDesc}/>
    </div>
  )
}

export default CreateDream;
