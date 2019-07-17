import React, { useState } from 'react';
import { Modal, Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

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
          window.ga('send', 'event', 'Submit Dream', 'Submit Form');
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
              window.scrollTo(0,0);
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
            value={email}
            handleChange={setEmail}
          />

          <p>Brief description your dream:
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  Recommended length: 2-3 paragraphs. 
                  First introduce the context or background if applicable.
                  Then walk through your dream. Make sure you paint a picture of the element.
                  How did the dream make you feel? What made you want to donate it?
                </Tooltip>
              }
            >
              <img class="describeDreamHelp" src="https://img.icons8.com/ios-glyphs/25/000000/help.png"/>
            </OverlayTrigger>
          </p>
          <FormTextarea
            rows={5}
            isRequired={true}
            controlId="CreateDreamDesc"
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
