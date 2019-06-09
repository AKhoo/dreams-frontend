import React from 'react';
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

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      centered
      dialogClassName="SendDreamModal"
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Complete Transaction</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>We’ll need a few more details to complete the purchase.</p>
          <p>
            You can add a custom message to be included with the dream. We’ll
            send the details directly to whomever you want to get the good luck
            -- it can be you or someone else.
          </p>
          <StripeProvider apiKey="pk_test_oeaRCbtNezkjFcikM3dEFl2w000KmVZVk1">
            <div className="payment-form">
              <Elements>
                <SendDreamForm
                  selectedDreamId={selectedDreamId}
                  messages={messages}
                  setMessages={setMessages}
                />
              </Elements>
            </div>
          </StripeProvider>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            type="submit"
            variant="success"
            onClick={e => {
              e.preventDefault();
              document.getElementById('sendDreamSubmit').click();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default SendDreamModal;
