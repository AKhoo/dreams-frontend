import React, {Component, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Form from 'react-bootstrap/Form';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import { postPurchase } from './actions';

const SendDreamForm = (props) => {
  const [fromEmail, setFromEmail] = useState('');
  const [toName, setToName] = useState('');
  const [toEmail, setToEmail] = useState('');
  const [message, setMessage] = useState('');
  const { selectedDreamId } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { token } = await props.stripe.createToken({name: "Name"});
    const data = {
      recipient_email: toEmail,
      buyer_email: fromEmail,
      dream_id: selectedDreamId,
      amount_in_cents: 1, 
      fee_in_cents: 1,
      stripe_token: token.id
    };
    console.log(data);
    const response = await postPurchase(data);  
    if (response.ok) console.log("Purchase Complete!")
  }

  return (
    <div className="checkout">
      <Form>
        <FormInput 
          type="email" 
          isRequired={true}
          controlId="SendDreamFromEmail"
          label="Your email address"
          placeholder="Your email address"
          value={fromEmail} 
          handleChange={setFromEmail}/>

        <FormInput 
          type="text" 
          isRequired={true}
          controlId="SendDreamToName"
          label="Name"
          placeholder="Beneficiary name"
          value={toName} 
          handleChange={setToName}/>

        <FormInput 
          type="email" 
          isRequired={true}
          controlId="SendDreamToEmail"
          label="Email address"
          placeholder="Beneficiary email"
          value={toEmail} 
          handleChange={setToEmail}/>

        <FormTextarea 
          rows={3} 
          controlId="SendDreamMessage" 
          label="Message"
          placeholder="Enter a message (optional)"
          value={message} 
          handleChange={setMessage}/>

        <p>Payment:</p>
        <CardElement />

        <Button type="submit" variant="primary" onClick={handleSubmit}>
          Send Good Fortune
        </Button>
      </Form>
    </div>
  );
}

export default injectStripe(SendDreamForm);
