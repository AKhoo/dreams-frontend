import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import {Elements, StripeProvider} from 'react-stripe-elements';
import { getRandomDream, setSelectedDream } from './actions';
import PaymentForm from './PaymentForm';

const SendDream = (props) => {
  const {storeSelectedDream, selectedDream, elementsData} = props;
  const selectedDreamElementName = selectedDream.relationships ? elementsData[selectedDream.relationships.elements.data[0].id].attributes.name : null;
  const selectedDreamElementDesc = selectedDream.relationships ? elementsData[selectedDream.relationships.elements.data[0].id].attributes.commentary : null;

  const getAndStoreRandomDream = () => {
    getRandomDream()
      .then(({data}) => {
        storeSelectedDream(data.data);
      });
  }

  useEffect(() => {
    getAndStoreRandomDream();
  }, []);

  return (
    <div>
      <h1>Send a Dream</h1>
      <Button variant="light" onClick={getAndStoreRandomDream}>Next Dream</Button>
      <div>
        <Image src="https://img.icons8.com/ios-glyphs/30/000000/corgi.png" rounded />
        <p>{selectedDreamElementName}</p>
      </div>
      <div>
        <p>Someone dreamed of a {selectedDreamElementName}!</p>
        <p>{selectedDreamElementDesc}</p>
        <p>For a donation of $5.00, we’ll reveal the details of the dream to the beneficiary, so they can benefit from this good omen.</p>
        <p>Dream ID: {selectedDream.id}</p>
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div className="payment-form">
            <Elements>
              <PaymentForm />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    </div>
  )
}

const mapStateToProps = ({selectedDream, elementsData}) => {
  return {
    selectedDream,
    elementsData,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    storeSelectedDream: dreamData => dispatch(setSelectedDream(dreamData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendDream);
