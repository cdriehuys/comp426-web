import React from 'react';
import { Grid } from 'react-bootstrap';
import { Route } from 'react-router-dom';


import { AppNav } from '../components';
import { HomePage, LoginPage, RegistrationPage } from '../pages';
 

const AppContainer = () => [
  <AppNav key="navbar" />,
  <Grid key="content">
  	<Route exact path="/" component={HomePage} />
    <Route path="/login/" component={LoginPage} />
    <Route path="/register/" component={RegistrationPage} />
  </Grid>,
];

export default AppContainer;
