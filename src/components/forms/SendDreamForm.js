import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Button, Form } from 'react-bootstrap';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import {
  postPurchase,
  addSuccessMessage,
  addErrorMessage,
} from '../../actions';

const SendDreamForm = props => {
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [toName, setToName] = useState('');
  const [toEmail, setToEmail] = useState('');
  const [message, setMessage] = useState('');
  const [donationCents, setDonationCents] = useState(500);
  const {
    selectedDreamId,
    messages,
    setMessages,
    setShowModal,
    setDisabled,
  } = props;

  const handleSubmit = async e => {
    e.preventDefault();
    if (window.stripeComplete) {
      setDisabled(true);
      const { token } = await props.stripe.createToken({ name: 'Name' });
      const data = {
        recipient_email: toEmail,
        recipient_name: toName,
        message,
        buyer_email: fromEmail,
        buyer_name: fromName,
        dream_id: selectedDreamId,
        amount_in_cents: donationCents,
        stripe_token: token.id,
      };
      postPurchase(data)
        .then(() => {
          setMessages(
            addSuccessMessage(
              messages,
              'Purchase completed successfully. You should receive a confirmation email shortly. Thank you!',
            ),
          );
          setFromEmail('');
          setFromName('');
          setToEmail('');
          setToName('');
          setMessage('');
          window.cardElement.clear();
          setShowModal(false);
          window.scrollTo(0,0);
        })
        .catch(err => {
          const message = err.response ? err.response.data.error : err.message;
          setMessages(addErrorMessage(messages, message));
        })
        .finally(() => setDisabled(false));
    }
  };

  return (
    <div className="checkout">
      <Form id="sendDreamForm" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          isRequired={true}
          controlId="SendDreamFromName"
          label="Your name"
          value={fromName}
          handleChange={setFromName}
        />

        <FormInput
          type="email"
          isRequired={true}
          controlId="SendDreamFromEmail"
          label="Your email"
          value={fromEmail}
          handleChange={setFromEmail}
        />

        <FormInput
          type="text"
          isRequired={true}
          controlId="SendDreamToName"
          label="Beneficiary name"
          value={toName}
          handleChange={setToName}
        />

        <FormInput
          type="email"
          isRequired={true}
          controlId="SendDreamToEmail"
          label="Beneficiary email"
          value={toEmail}
          handleChange={setToEmail}
        />

        <FormTextarea
          rows={2}
          controlId="SendDreamMessage"
          label="Enter a custom message (optional)"
          value={message}
          handleChange={setMessage}
        />

        <p>Donation:</p>
        <Form.Group>
          <Form.Check
            inline
            type="radio"
            name="donation"
            label="$5"
            defaultChecked
            onClick={() => setDonationCents(500)}
          />
          <Form.Check
            inline
            type="radio"
            name="donation"
            label="$10"
            onClick={() => setDonationCents(1000)}
          />
          <Form.Check
            inline
            type="radio"
            name="donation"
            label="$15"
            onClick={() => setDonationCents(1500)}
          />
          <Form.Check
            inline
            type="radio"
            name="donation"
            label="$20"
            onClick={() => setDonationCents(2000)}
          />
          <Form.Text className="text-muted">
            10% of this amount be allocated to cover our transaction and
            operating costs
          </Form.Text>
        </Form.Group>

        <p>Payment:</p>
        <div id="card-element">
          <CardElement
            onReady={currentElement => {
              window.cardElement = currentElement;
              window.stripeComplete = false;
              currentElement.on("change", e => {
                if (e.complete) {
                  window.stripeComplete = true;
                } else {
                  window.stripeComplete = false;
                }
              })
            }}
          />
        </div>

        <Button type="submit" variant="primary" id="sendDreamSubmit">
          Send Good Fortune
        </Button>
      </Form>
    </div>
  );
};

export default injectStripe(SendDreamForm);
