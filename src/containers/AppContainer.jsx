import React from 'react';
import { Grid, Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, Route } from 'react-router-dom';

import { LoginPage, RegistrationPage } from '../pages';


const AppContainer = () => [
  <Navbar key="navbar" inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">UltiManager</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/login/">
          <NavItem>Log In</NavItem>
        </LinkContainer>
        <LinkContainer to="/register/">
          <NavItem>Register</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>,
  <Grid key="content">
    <Route path="/login/" component={LoginPage} />
    <Route path="/register/" component={RegistrationPage} />
  </Grid>,
];


export default AppContainer;
