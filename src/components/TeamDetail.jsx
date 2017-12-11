import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, PageHeader, Tab, Tabs } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route, Switch, withRouter } from 'react-router-dom';

import { TeamPlayerList } from '../containers';
import { AddPlayer, GamesList, GameStatistics, PlayerForm } from '../components';


const games = [
  {id: 1, name: "Darkside vs. Flyers"},
  {id: 2, name: "Darkside vs. Triforce"},
  {id: 3, name: "Triforce vs. Flyers"}
];

const game = {id: 1, name: 'SF Bridges', opposing_team_name: 'LA Planes', points_for: 11, points_against: 5};


const TeamDetail = ({ canEdit, match, team }) => (
  <div>
    <PageHeader>{team.name}</PageHeader>

    <Switch>
      <Route path={`${match.path}players/add/`} component={PlayerForm} />

      <Route
        render={() => (
          <Tabs defaultActiveKey={1} id="team-tabs">
            <Tab eventKey={1} title="Roster">
              <div>
                <Col sm={6} md={6} lg={6}>
                  <TeamPlayerList canEdit={canEdit} />
                  {canEdit && (
                    <LinkContainer to={`${match.url}players/add/`}>
                      <Button bsStyle="primary">Add Player</Button>
                    </LinkContainer>
                  )}
                </Col>
                <Col>
                  <div>
                    <h2 className="text-center">Player Stats</h2>
                    <p className="text-center">Click on a player to view their stats.</p>
                  </div>
                </Col>
              </div>
            </Tab>

            <Tab eventKey={2} title="Games">
              <div className="text-center">
                <h2>Games Home</h2>
                <Col sm={6} md={6} lg={6}>
                  <GamesList games={games}/>
                  {/* TODO: Insert ADD GAME BUTTON*/}
                </Col>
                <Col className="text-center">

                  <p>Click on a game to view general stats.</p>

                  <GameStatistics game={game} />
                </Col>
              </div>
            </Tab>

            <Tab eventKey={3} title="Statistics">
              <p> Here are over all team statistics.  Pie chart with how many games were won or lost.</p>
            </Tab>
          </Tabs>
        )}
      />
    </Switch>
  </div>
);

TeamDetail.defaultProps = {
  canEdit: false,
};

TeamDetail.propTypes = {
  canEdit: PropTypes.bool,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  team: PropTypes.shape({
    level: PropTypes.string,
    name: PropTypes.string.isRequired,
    school: PropTypes.string,
  }),
};


export default withRouter(TeamDetail);
