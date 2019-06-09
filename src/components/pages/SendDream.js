import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Image, Button } from 'react-bootstrap';

import SpinnerModal from '../other/SpinnerModal';
import Messages from '../other/Messages';
import SendDreamModal from '../other/SendDreamModal';

import { getAndStoreElements, getAndStoreDream } from '../../actions';

const SendDream = props => {
  const { selectedDream, elementsData } = props;

  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  let selectedDreamId,
    selectedDreamPreview,
    selectedDreamElementName,
    selectedDreamElementDesc;
  if (selectedDream.data) {
    selectedDreamId = selectedDream.data.id;
    selectedDreamPreview = selectedDream.data.attributes.redacted_description;
    const selectedDreamElementId =
      selectedDream.data.relationships.elements.data[0].id;
    if (elementsData.data) {
      selectedDreamElementName =
        elementsData.data[selectedDreamElementId].attributes.name;
      selectedDreamElementDesc =
        elementsData.data[selectedDreamElementId].attributes.commentary;
    }
  }

  const urlParams = new URL(window.location).searchParams;
  const dreamInUrl = urlParams.get('dream');

  useEffect(() => {
    getAndStoreDream(dreamInUrl);
    if (!elementsData.data) {
      getAndStoreElements();
    }
  }, []);

  return (
    <div>
      <SpinnerModal
        loadState={elementsData.loadState || selectedDream.loadState}
      />
      <Messages messages={messages} />

      <h1>Send a Dream</h1>
      <p>
        In Korean culture, dreams aren’t just passing subconscious thoughts;
        they are premonitions that can be passed on to others. A good dream can
        be bought or sold -- but for the dream to keep its good fortune, it must
        be kept a secret.
      </p>
      <p>
        Below is a dream with a good omen that someone has written to us. For a
        minimum donation of $5 to the Make A Wish Foundation, we’ll reveal the
        details of the dream to whomever you choose (yourself or a friend), so
        the receiver can benefit from this good omen.
      </p>
      <div className="bodyContentBox">
        <div>
          <p>Someone dreamed of a {selectedDreamElementName}!</p>
          <p>{selectedDreamElementDesc}</p>
          <p>
            For a small charitable donation, we’ll reveal the details of the
            dream to the beneficiary, so they can benefit from this good omen.
          </p>
          <div>
            <Image
              src="https://img.icons8.com/ios-glyphs/30/000000/corgi.png"
              rounded
            />
            <p>{selectedDreamElementName}</p>
          </div>

          <div className="dreamPreviewBox">
            <p>Dream ID: {selectedDreamId}</p>
            <p>{selectedDreamPreview}</p>
          </div>

          <Button variant="primary" onClick={() => setShowModal(true)}>
            Send This Dream
          </Button>
          <Button variant="light" onClick={() => getAndStoreDream()}>
            View Another Dream
          </Button>
        </div>
      </div>

      {showModal && (
        <SendDreamModal
          showModal={showModal}
          setShowModal={setShowModal}
          selectedDreamId={selectedDreamId}
          messages={messages}
          setMessages={setMessages}
        />
      )}
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
