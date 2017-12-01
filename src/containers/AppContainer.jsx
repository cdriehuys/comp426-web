import React from 'react';
import { Grid, Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, Route } from 'react-router-dom';

import { LoginPage } from '../pages';


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
        <LinkContainer to="#">
          <NavItem>Register</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>,
  <Grid key="content">
    <Route path="/login/" component={LoginPage} />
  </Grid>,
];


export default AppContainer;
