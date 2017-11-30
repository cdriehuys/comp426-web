import React from 'react';
import { Grid, Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route } from 'react-router-dom';

import { LoginForm } from '../components';


const AppContainer = () => [
  <Navbar key="navbar" inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>UltiManager</Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/login/">
          <NavItem>Log In</NavItem>
        </LinkContainer>
        <LinkContainer to="#">
          <NavItem>Register</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>,
  <Grid key="content">
    <Route exact path="/login/" component={LoginForm} />
  </Grid>,
];


export default AppContainer;
