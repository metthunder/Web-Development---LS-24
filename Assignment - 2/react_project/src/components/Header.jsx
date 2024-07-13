// src/components/Header.jsx
import React from 'react';
import { Navbar, Container, Form } from 'react-bootstrap';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <Navbar bg={darkMode ? "dark" : "primary"} variant={darkMode ? "dark" : "light"} className="mb-3">
      <Container>
        <Navbar.Brand>Google Keep Clone</Navbar.Brand>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Dark Mode"
          onChange={toggleDarkMode}
          checked={darkMode}
        />
      </Container>
    </Navbar>
  );
};

export default Header;
