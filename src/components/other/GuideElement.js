import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const GuideElement = (props) => {
  const { element, withButton, handleClick } = props;
  return (
    <Container>
      <Row>
        <Col xs="auto">
          <div className="circle">
            <Image src={element.attributes.image_url}/>
          </div>
        </Col>
        <Col>
          <p className="elementName">{element.attributes.name}</p>
          <p>{element.attributes.commentary}</p>
          {withButton 
            && <Button type="submit" variant="success" onClick={() => 
              handleClick({name: element.attributes.name, id: element.id})}> 
                Submit Dream
              </Button>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default GuideElement;
