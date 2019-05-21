import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../other/Logo';

const Landing = _props => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={8}>
          <Row>
            <Col xs={12}>
              <h1>
                In Korean culture, good dreams bring good omens which can be
                used or given to someone else.
              </h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
              <h3>
                <Logo /> is an online experiment where anyone can buy good
                dreams and the good luck that comes with it.
              </h3>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
              <h3 className="subtitle-italicized">
                All proceeds go to charity.
              </h3>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Image
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/different_love_a3rg.svg"
            fluid
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} md={6}>
          <h4>
            <b>Send good fortune</b>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link className="inherit" to="/send">
            <Button>Send a dream</Button>
          </Link>
        </Col>
        <Col xs={12} md={6}>
          <h4>
            <b>Donate a dream</b>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link className="inherit" to="/donate">
            <Button>Donate a dream</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
