import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getRandomDream, setSelectedDream } from './actions';

const SendDream = (props) => {
  const {storeSelectedDream, selectedDream} = props;
  useEffect(() => {
    getRandomDream()
      .then(({data}) => {
        storeSelectedDream(data.data);
      });
  }, []);
  return (
    <div>SendDream goes here.</div>
  )
}

const mapStateToProps = ({selectedDream}) => {
  return {
    selectedDream,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    storeSelectedDream: dreamData => dispatch(setSelectedDream(dreamData)),
  }
}

export default connect(undefined, mapDispatchToProps)(SendDream);
