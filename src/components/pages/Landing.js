import React, { Fragment } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LogoText from '../other/LogoText';

const Landing = _props => {
  return (
    <Fragment>
      <Row className="landing-top">
        <Col xs={12} md={8}>
          <Row>
            <Col xs={12}>
              <h1>
              Buy dreams other people have donated -- and the good luck that comes with them.
              </h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} className="landingDescription">
              <h4>
              In Korean culture, good dreams bring good omens. Pig dreams, for example, are believed to symbolize wealth and well-being.
              </h4>
              <h4>
              People can let others “buy” their dream. In exchange for a small amount of money, the buyer receives the details of the dream, and the good luck it’s believed to bring.
              </h4>
            </Col>
          </Row>
          <div className="mobile-spacing" />
        </Col>
        <Col xs={12} md={4}>
          <Image
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/different_love_a3rg.svg"
            fluid
          />
        </Col>
      </Row>
      <div className="mobile-spacing" />
      <Row className="landing-bottom">
        <Col xs={12} md={6} className="mobile-bottom-spacing">
          <div className="info-box">
            <h4>
              <b>Had a dream recently?</b>
            </h4>
            <p>
              View our Dream Guide to see what different symbols mean in Korean
              dream interpretation.
            </p>
            <p>
              You can “donate” a recent dream by sharing the details of the dream with us.
            </p>
            <Link className="inherit" to="/donate">
              <Button>Donate Your Dream</Button>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6} className="mobile-bottom-spacing">
          <div className="info-box">
            <h4>
              <b>Interested in good luck?</b>
            </h4>
            <p>
              We’ve collected dreams with good omens. For a small charitable donation, you can “buy” the details of a dream and the good omen for yourself or a friend.
            </p>
            <p>
              All proceeds go to the Make-a-Wish foundation.
            </p>
            <Link className="inherit" to="/send">
              <Button>Buy a Dream</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Landing;
