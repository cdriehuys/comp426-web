import React from 'react';
import { Grid } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import { AppNav } from '../components';
import { GamesPage, HomePage, LoginPage, RegistrationPage, TeamListPage } from '../pages';


const AppContainer = () => [
  <AppNav key="navbar" />,
  <Grid key="content">
    <Route exact path="/" component={HomePage} />
    <Route path="/games/" component = {GamesPage} />
    <Route path="/login/" component={LoginPage} />
    <Route path="/register/" component={RegistrationPage} />
    <Route path="/teams/" component={TeamListPage} />
  </Grid>,
];

export default AppContainer;
