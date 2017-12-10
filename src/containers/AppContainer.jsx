import React from 'react';
import { Grid } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import { AppNav } from '../components';
import { HomePage, LoginPage, MyTeamPage, RegistrationPage, TeamListPage } from '../pages';


const AppContainer = () => [
  <AppNav key="navbar" />,
  <Grid key="content">
  	<Route exact path="/" component={HomePage} />
    <Route path="/login/" component={LoginPage} />
    <Route path="/register/" component={RegistrationPage} />
    <Route exact path="/teams/" component={TeamListPage} />
    <Route path="/teams/:id/" component={MyTeamPage} />
  </Grid>,
];

export default AppContainer;
