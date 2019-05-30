import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SpinnerModal from '../other/SpinnerModal';
import CreateDreamModal from '../other/CreateDreamModal';
import GuideElement from '../other/GuideElement';
import Messages from '../other/Messages';

import { getAndStoreElements } from '../../actions';

const CreateDream = props => {
  const { elementsData } = props;

  const elementsArray = elementsData.data ? Object.values(elementsData.data) : null;

  const [selectedElement, setSelectedElement] = useState({name: null,id: null});
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(true);
  
  useEffect(() => {
    if (!elementsData.data) {
      getAndStoreElements();
    };
  }, []);
  
  return (
    <div>
      <SpinnerModal loadState={elementsData.loadState}/>
      <Messages messages={messages}/>

      <h1>Capture Your Dream</h1>
      <p>What does your dream say? It could be a prediction about the future.</p>
      <p>In Korean dream interpretation, there are good dreams (길몽), bad dreams (흉몽), and nightmares (악몽). There are also “conception dreams” (태몽), which are dreams a woman (or another woman very close to her) has when she gets pregnant.</p>
      <p>For an omen to apply, it must be a major element of your dream. Your dream also needs to have a coherent thread. If your dream is very scattered and without sequence, then it is known as a “dog dream” (개꿈), which is a dream without special meaning.</p>

      <div className="bodyContentBox">
        <h2>Good Omens</h2>
        <p>If your dream includes one of the symbols below, congratulations!</p>
        <p>You can keep your dream a secret to retain the good fortune, or you can donate it for others to benefit by telling us the details of your dream.</p>
        {elementsArray 
          ? elementsArray.map(element => <GuideElement 
            element={element} 
            withButton={true} 
            handleClick={setSelectedElement} 
            setShowModal={setShowModal}
            key={element.id}/>) 
          : null}
      </div>

      {selectedElement.id && <CreateDreamModal 
        selectedElement={selectedElement} 
        showModal={showModal}
        setShowModal={setShowModal}
        messages={messages}
        setMessages={setMessages}
        />}
    </div>
  );
};

const mapStateToProps = ({ elementsData }) => {
  return {
    elementsData,
  };
};

export default connect(mapStateToProps)(CreateDream);
