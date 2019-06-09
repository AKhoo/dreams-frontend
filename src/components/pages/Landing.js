import React, { Fragment } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LogoText from '../other/LogoText';

const Landing = _props => {
  return (
    <Fragment>
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
                <LogoText /> is an online experiment where anyone can buy good
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
      <Row>
        <Col xs={12}>
          <h4 className="subtitle-grey-italicized">Here&apos;s how it works</h4>
        </Col>
      </Row>
      <Row className="mt-5">
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
              If your dream had a good omen, you have two choices: You can
              retain the omen by keeping the dream a secret. Or, you can
              “donate” the omen by sending the details of your dream to us.
              We’ll let others “buy” the omen in exchange for a small donation
              to a non-profit organization. Your dreams help others with their
              dreams.
            </p>
            <Link className="inherit" to="/donate">
              <Button>See the dream guide</Button>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6} className="mobile-bottom-spacing">
          <div className="info-box">
            <h4>
              <b>Interested in good luck?</b>
            </h4>
            <p>
              According to legend, Kim Munhui of the Silla Dynasty bought a good
              dream from her sister and later became the queen. Many people
              continue to “buy” dreams today in hopes of collecting on the good
              omens that comes with it.
            </p>
            <p>
              We’ve collected dreams with good omens from people around the
              world. For a small charitable donation, you can “buy” the details
              of a dream and the good omen for yourself or a friend.
            </p>
            <Link className="inherit" to="/send">
              <Button>Browse dreams</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Landing;
