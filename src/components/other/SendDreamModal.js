import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Elements, StripeProvider } from 'react-stripe-elements';

import SendDreamForm from '../forms/SendDreamForm';

const SendDreamModal = props => {
  const {
    showModal,
    setShowModal,
    messages,
    setMessages,
    selectedDreamId,
  } = props;

  const [disabled, setDisabled] = useState(true);

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      centered
      dialogClassName="SendDreamModal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Complete Transaction</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>We need a few more details to complete the transaction. 
          The dream will be sent directly to whomever you want to get the 
          good luck -- it can be you or someone else!
        </p>
        <StripeProvider apiKey="pk_test_oeaRCbtNezkjFcikM3dEFl2w000KmVZVk1">
          <div className="payment-form">
            <Elements>
              <SendDreamForm
                selectedDreamId={selectedDreamId}
                messages={messages}
                setMessages={setMessages}
                setShowModal={setShowModal}
                setDisabled={setDisabled}
              />
            </Elements>
          </div>
        </StripeProvider>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="light" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={disabled}
          onClick={e => {
            e.preventDefault();
            document.getElementById('sendDreamSubmit').click();
          }}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SendDreamModal;
