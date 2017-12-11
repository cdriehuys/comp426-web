import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import { AllTeams, TeamDetailByID, UserTeams } from '../containers';
import { MyTeam, PrivateRoute, TeamForm, TeamList } from '../components';


const TeamListPage = ({ match }) => (
  <Row>
    <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
      <Switch>
        {/* Add new team */}
        <PrivateRoute path={`${match.url}/add/`} component={TeamForm} />
        {/* Route to render all teams */}
        <Route path={`${match.url}/all/`} component={AllTeams} />
        {/* Route to render a specific team */}
        <Route path={`${match.url}/:id/`} component={TeamDetailByID} />
        {/* Fall back to rendering the user's teams */}
        <PrivateRoute path={`${match.url}`} component={UserTeams} />
      </Switch>
    </Col>
  </Row>
);

TeamListPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};



export default TeamListPage;
