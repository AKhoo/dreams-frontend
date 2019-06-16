import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import { NewLineBreak } from '../../lib/helpers';

const GuideElement = props => {
  const {
    element,
    isLastElement,
    withButton,
    handleClick,
    setShowModal,
  } = props;
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
          {element.attributes.commentary.split(NewLineBreak).map((str, key) => {
            return (
              <p key={key}>
                {str}
                <br />
              </p>
            );
          })}
          {withButton && (
            <Button
              type="submit"
              variant="primary"
              onClick={() => {
                handleClick({ name: element.attributes.name, id: element.id });
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
