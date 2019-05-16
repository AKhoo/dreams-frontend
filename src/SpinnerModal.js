import React from 'react';
import { connect } from 'react-redux';
import { Modal, Spinner } from 'react-bootstrap';

const SpinnerModal = props => {
  const { loadState } = props;
  return (
    <Modal
      show={loadState}
      centered
      dialogClassName="loadingModal"
      backdropClassName="loadingModalBackdrop"
    >
      <Spinner animation="border" />
    </Modal>
  );
};

const mapStateToProps = ({ loadState }) => {
  return {
    loadState,
  };
};

export default connect(mapStateToProps)(SpinnerModal);
