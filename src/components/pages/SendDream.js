import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { Image, Button } from 'react-bootstrap';
import SendDreamForm from '../forms/SendDreamForm';
import { getAndStoreDream } from '../../actions';

const SendDream = props => {
  const { selectedDream, elementsData } = props;

  let selectedDreamId, selectedDreamElementName, selectedDreamElementDesc;
  if (selectedDream.relationships) {
    selectedDreamId = selectedDream.id;
    const selectedDreamElementId =
      selectedDream.relationships.elements.data[0].id;
    if (elementsData[selectedDreamElementId]) {
      selectedDreamElementName =
        elementsData[selectedDreamElementId].attributes.name;
      selectedDreamElementDesc =
        elementsData[selectedDreamElementId].attributes.commentary;
    }
  }

  const urlParams = new URL(window.location).searchParams;
  const dreamInUrl = urlParams.get('dream');

  useEffect(() => {
    getAndStoreDream(dreamInUrl);
  }, []);

  return (
    <div>
      <h1>Send a Dream</h1>
      <Button variant="light" onClick={() => getAndStoreDream()}>
        Next Dream
      </Button>
      <div>
        <Image
          src="https://img.icons8.com/ios-glyphs/30/000000/corgi.png"
          rounded
        />
        <p>{selectedDreamElementName}</p>
      </div>
      <div>
        <p>Someone dreamed of a {selectedDreamElementName}!</p>
        <p>{selectedDreamElementDesc}</p>
        <p>
          For a small charitable donation, we’ll reveal the details of the dream
          to the beneficiary, so they can benefit from this good omen.
        </p>
        <p>Dream ID: {selectedDream.id}</p>
        <StripeProvider apiKey="pk_test_oeaRCbtNezkjFcikM3dEFl2w000KmVZVk1">
          <div className="payment-form">
            <Elements>
              <SendDreamForm selectedDreamId={selectedDreamId} />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    </div>
  );
};

const mapStateToProps = ({ selectedDream, elementsData }) => {
  return {
    selectedDream,
    elementsData,
  };
};

export default connect(mapStateToProps)(SendDream);
