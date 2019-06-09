import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

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
            roundedCircle
          />
        </Col>
        <Col xs={9} md={10}>
          <p className="elementName">{element.attributes.name}</p>
          <p>{element.attributes.commentary}</p>
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
