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
              style={{ verticalAlign: 'middle' }}
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
          <Link className="inherit nav-link ml-md-2" to="/donate">
            Donate Your Dream
          </Link>
          <Link className="inherit nav-link" to="/send">
            Buy a Dream
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
