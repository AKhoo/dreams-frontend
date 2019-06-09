import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import FormInput from '../forms/FormInput';
import FormTextarea from '../forms/FormTextarea';

import { postDream, addSuccessMessage, addErrorMessage } from '../../actions';

const CreateDreamModal = props => {
  const {
    selectedElement,
    showModal,
    setShowModal,
    messages,
    setMessages,
  } = props;

  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [disabled, setDisabled] = useState(false);

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      centered
      dialogClassName="CreateDreamModal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Finish Journaling</Modal.Title>
      </Modal.Header>

      <Form
        onSubmit={e => {
          e.preventDefault();
          setDisabled(true);
          postDream({
            email,
            element_ids: selectedElement.id,
            description,
          })
            .then(() => {
              setMessages(
                addSuccessMessage(
                  messages,
                  'Dream successfully submitted. Thank you!',
                ),
              );
              setEmail('');
              setDescription('');
              setShowModal(false);
            })
            .catch(err => {
              const message = err.response
                ? err.response.data.error
                : err.message;
              setMessages(addErrorMessage(messages, message));
            })
            .finally(() => setDisabled(false));
        }}
      >
        <Modal.Body>
          <p>You dreamed of a {selectedElement.name}? Tell us more!</p>
          <p>
            “Donate” a good omen by sending us the details of your dream. If
            it’s usable, we’ll let others “buy” the omen in exchange for a small
            donation to a non-profit organization.{' '}
          </p>
          <p>
            We keep your dream secret, and only reveal the details when the
            buyer has made a donation to charity. By donating a dream, you help
            others with their dreams!
          </p>

          <FormInput
            type="email"
            isRequired={true}
            controlId="CreateDreamEmail"
            label="Email address"
            placeholder="Enter email"
            subText="We'll never share your email with anyone else."
            value={email}
            handleChange={setEmail}
          />

          <FormTextarea
            rows={3}
            isRequired={true}
            controlId="CreateDreamDesc"
            label="Description"
            placeholder="Enter dream description"
            value={description}
            handleChange={setDescription}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="light" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button type="submit" variant="primary" disabled={disabled}>
            Donate My Dream
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CreateDreamModal;
