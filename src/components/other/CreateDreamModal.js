import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CreateDreamModal = props => {
  const { selectedElement } = props;
  return (
    <Modal
      show={selectedElement.id}
      centered
      dialogClassName="CreateDreamModal"
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
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
