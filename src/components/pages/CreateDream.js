import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SpinnerModal from '../other/SpinnerModal';
import CreateDreamModal from '../other/CreateDreamModal';
import GuideElement from '../other/GuideElement';
import Messages from '../other/Messages';

import { getAndStoreElements } from '../../actions';

const CreateDream = props => {
  const { elementsData } = props;

  const elementsArray = elementsData.data
    ? Object.values(elementsData.data)
    : null;

  const [selectedElement, setSelectedElement] = useState({
    name: null,
    id: null,
  });
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (!elementsData.data) {
      getAndStoreElements();
    }
  }, []);

  return (
    <div>
      <SpinnerModal loadState={elementsData.loadState} />
      <Messages messages={messages} />

      <h1>Donate Your Dream</h1>
      <p>
        If you had a coherent dream (as opposed to a dream that is very
        scattered and without sequence), it could be a prediction about the
        future.
      </p>
      <div className="bodyContentBox">
        <h2>Good Omens</h2>
        <p>
          Below are a list of symbols believed to be lucky in Korean culture, as
          found in academic studies, newspapers and cultural blogs.
        </p>
        <p>
          Were any of them a major element of your dream? If yes,
          congratulations! You had a lucky dream 🙂. You can “donate” the dream
          for others to benefit by telling us the details of your dream. Or, you
          can keep it a secret to retain the good fortune for yourself.
        </p>
        {elementsArray
          ? elementsArray.map((element, index) => (
              <GuideElement
                element={element}
                withButton={true}
                handleClick={setSelectedElement}
                setShowModal={setShowModal}
                key={element.id}
                isLastElement={index === elementsArray.length - 1}
              />
            ))
          : null}
      </div>

      {selectedElement.id && (
        <CreateDreamModal
          selectedElement={selectedElement}
          showModal={showModal}
          setShowModal={setShowModal}
          messages={messages}
          setMessages={setMessages}
        />
      )}
    </div>
  );
};

const mapStateToProps = ({ elementsData }) => {
  return {
    elementsData,
  };
};

export default connect(mapStateToProps)(CreateDream);
