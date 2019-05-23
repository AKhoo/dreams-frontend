import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LogoText from './LogoText';

export default () => {
  return (
    <Navbar className="header" bg="light" expand="md">
      <Navbar.Brand>
        <Link className="inherit" to="/">
          <div className="logo-wrapper">
            <img
              style={{ 'vertical-align': 'middle' }}
              src="https://img.icons8.com/nolan/64/000000/christmas-star.png"
            />
            <span>
              <LogoText />
            </span>
          </div>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="main-navbar" />

      <Navbar.Collapse id="main-navbar">
        <Nav className="ml-auto nav-link-container">
          <Nav.Link>
            <Link className="inherit" to="/send">
              Send a Dream
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="inherit" to="/donate">
              Capture Your Dream
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
