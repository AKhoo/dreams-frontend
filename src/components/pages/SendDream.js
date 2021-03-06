import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Image, Button, Container, Row, Col } from 'react-bootstrap';

import { addLineBreaksToText } from '../../lib/helpers';

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
    selectedDreamElementDimension,
    selectedDreamElementId;
  let selectedDreamElementDesc = '';
  if (selectedDream.data) {
    selectedDreamId = selectedDream.data.id;
    selectedDreamPreview = selectedDream.data.attributes.redacted_description;
    selectedDreamElementId =
      selectedDream.data.relationships.elements.data[0].id;
    if (elementsData.data) {
      selectedDreamElementName =
        elementsData.data[selectedDreamElementId].attributes.name;
      selectedDreamElementDimension =
        elementsData.data[selectedDreamElementId].attributes.dimension;
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

      <h1>Buy a Dream</h1>
      <p>
        According to legend, Kim Munhui of the Silla Dynasty bought a good dream
        from her sister and later became the queen. Many people continue to
        “buy” dreams today in hopes of collecting on the good omens that comes
        with it. For the dream to keep its good fortune, its contents must be
        kept secret until it has been bought.
      </p>
      <p>Below is a good dream that someone has written to us.</p>
      <p>
        For a minimum donation of $5 to the Make A Wish Foundation, we’ll reveal
        the details of the dream to whomever you choose (yourself or a friend),
        so the receiver can benefit from this good omen.
      </p>
      <div className="bodyContentBox">
        <div>
          <Container className="mb-4">
            <Row>
              <Col xs={3} md={2}>
                <Image
                  className="elementImage"
                  src={
                    selectedDreamElementId && elementsData.data
                      ? elementsData.data[selectedDreamElementId].attributes
                          .image_url
                      : null
                  }
                  fluid
                  rounded
                />
              </Col>
              <Col xs={9} md={10}>
                <p className="elementName">
                  Feature: {selectedDreamElementName}
                </p>
                <p className="elementName">
                  Symbolizes: {selectedDreamElementDimension}
                </p>
                {addLineBreaksToText(selectedDreamElementDesc)}
              </Col>
            </Row>
          </Container>
          <div className="dreamPreviewBox">
            <p>Dream preview:</p>
            {addLineBreaksToText(selectedDreamPreview)}
            <p className="dreamId">Dream ID: {selectedDreamId}</p>
          </div>
          <Button
            variant="primary"
            onClick={() => {
              window.ga('send', 'event', 'Buy Dream', 'Open Send Modal');
              setShowModal(true);
            }}
          >
            Send This Dream
          </Button>
          <Button
            variant="light"
            onClick={() => {
              window.ga('send', 'event', 'Buy Dream', 'View Another Dream');
              getAndStoreDream();
            }}
          >
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
