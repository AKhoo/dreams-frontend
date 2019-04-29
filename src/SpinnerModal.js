import React from 'react';
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

const SpinnerModal = (props) => {
  const {loadState} = props;
  return (
    <Modal show={loadState} centered dialogClassName="loadingModal">
      Spinner Active
      <Spinner animation="border" />
    </Modal>
  )
}

const mapStateToProps = ({loadState}) => {
  return {
    loadState,
  }
}

export default connect(mapStateToProps)(SpinnerModal);
