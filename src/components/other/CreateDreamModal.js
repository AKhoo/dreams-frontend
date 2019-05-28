import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import FormInput from '../forms/FormInput';
import FormTextarea from '../forms/FormTextarea';

import { postDream } from '../../actions';

const CreateDreamModal = props => {
  const { selectedElement, addSuccessMessage } = props;

  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');  

  return (
    <Modal
      show
      centered
      dialogClassName="CreateDreamModal"
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Finish Journaling</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>You dreamed of a {selectedElement.name}? Tell us more!</p>
          <p>“Donate” a good omen by sending us the details of your dream. If it’s usable, we’ll let others “buy” the omen in exchange for a small donation to a non-profit organization. </p>
          <p>We keep your dream secret, and only reveal the details when the buyer has made a donation to charity. By donating a dream, you help others with their dreams!</p>

            <Form
            onSubmit={e => {
              e.preventDefault();
              postDream({
                email,
                element_ids: selectedElement.id,
                description,
              }).then(() => {
                addSuccessMessage('Dream successfully submitted. Thank you!');
                setEmail('');
                setDescription('');
              });
            }}
          >
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
              subText="Describe your dream"
              value={description}
              handleChange={setDescription}
            />

            <Button type="submit" variant="primary">
              Donate My Dream
            </Button>
          </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default CreateDreamModal;
