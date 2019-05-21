import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Button, Form } from 'react-bootstrap';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import { postPurchase } from './actions';

const SendDreamForm = props => {
  const [fromEmail, setFromEmail] = useState('');
  const [toName, setToName] = useState('');
  const [toEmail, setToEmail] = useState('');
  const [message, setMessage] = useState('');
  const { selectedDreamId } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { token } = await props.stripe.createToken({ name: 'Name' });
    const data = {
      recipient_email: toEmail,
      buyer_email: fromEmail,
      dream_id: selectedDreamId,
      amount_in_cents: 50,
      fee_in_cents: 50,
      stripe_token: token.id,
    };
    const response = await postPurchase(data);
    if (response.status === 200) {
      setFromEmail('');
      setToEmail('');
      setToName('');
      setMessage('');
      window.cardElement.clear();
    };
  };

  return (
    <div className="checkout">
      <Form>
        <FormInput
          type="email"
          isRequired={true}
          controlId="SendDreamFromEmail"
          placeholder="Your email address"
          value={fromEmail}
          handleChange={setFromEmail}
        />

        <FormInput
          type="text"
          isRequired={true}
          controlId="SendDreamToName"
          placeholder="Beneficiary name"
          value={toName}
          handleChange={setToName}
        />

        <FormInput
          type="email"
          isRequired={true}
          controlId="SendDreamToEmail"
          placeholder="Beneficiary email"
          value={toEmail}
          handleChange={setToEmail}
        />

        <FormTextarea
          rows={3}
          controlId="SendDreamMessage"
          placeholder="Enter a message (optional)"
          value={message}
          handleChange={setMessage}
        />

        <p>Payment:</p>
        <div id="card-element">
          {/* How do I clear this element on postPurchase success? */}
          {/* In parent component, create a var and a func that sets the var. Pass the func to CardElement */}
          <CardElement onReady={currentElement => {window.cardElement = currentElement}} />
        </div>

        <Button type="submit" variant="primary" onClick={handleSubmit}>
          Send Good Fortune
        </Button>
      </Form>
    </div>
  );
};

export default injectStripe(SendDreamForm);
