import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import { addLineBreaksToText } from '../../lib/helpers';

const GuideElement = props => {
  const {
    element,
    isLastElement,
    withButton,
    handleClick,
    setShowModal,
  } = props;

  const [readMore, setReadMore] = useState(false);
  const fullCommentary = addLineBreaksToText(element.attributes.commentary);
  let shortenedCommentary = fullCommentary;
  if (element.attributes.commentary.split(' ').length > 35) {
    shortenedCommentary = addLineBreaksToText(
      element.attributes.commentary,
      35,
      setReadMore,
    );
  }

  let displayedCommentary = shortenedCommentary;
  if (readMore) {
    displayedCommentary = fullCommentary;
  }

  return (
    <Container className={isLastElement ? '' : 'mb-4'}>
      <Row>
        <Col xs={3} md={2}>
          <Image
            className="elementImage"
            src={element.attributes.image_url}
            fluid
            rounded
          />
        </Col>
        <Col xs={9} md={10}>
          <p className="elementName">{element.attributes.name}</p>
          <p>Symbolizes: {element.attributes.dimension}</p>
          {displayedCommentary}
          {withButton && (
            <Button
              type="submit"
              variant="primary"
              onClick={() => {
                handleClick({ name: element.attributes.name, id: element.id });
                window.ga('send', 'event', 'Submit Dream', 'Open Submit Modal');
                setShowModal(true);
              }}
            >
              Submit Dream
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default GuideElement;
