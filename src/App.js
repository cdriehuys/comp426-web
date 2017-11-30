import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';


const App = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>UltiManager</Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem href="#">Log In</NavItem>
        <NavItem href="#">Register</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default App;
