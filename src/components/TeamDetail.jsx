import PropTypes from 'prop-types';
import React from 'react';
import { Col, PageHeader, Tab, Tabs } from 'react-bootstrap';

import { TeamPlayerList } from '../containers';
import { AddPlayer, GamesList, GameStatistics } from '../components';


const games = [
  {id: 1, name: "Darkside vs. Flyers"},
  {id: 2, name: "Darkside vs. Triforce"},
  {id: 3, name: "Triforce vs. Flyers"}
];

const game = {id: 1, name: 'SF Bridges', opposing_team_name: 'LA Planes', points_for: 11, points_against: 5};


const TeamDetail = ({ canEdit, team }) => (
  <div>
    <PageHeader>{team.name}</PageHeader>
    <Tabs defaultActiveKey={1} id="team-tabs">
      <Tab eventKey={1} title="Roster">
        <div>
          <Col sm={6} md={6} lg={6}>
            <TeamPlayerList canEdit={canEdit} />
            {canEdit && <AddPlayer />}
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
  </div>
);

TeamDetail.defaultProps = {
  canEdit: false,
};

TeamDetail.propTypes = {
  canEdit: PropTypes.bool,
  team: PropTypes.shape({
    level: PropTypes.string,
    name: PropTypes.string.isRequired,
    school: PropTypes.string,
  }),
};


export default TeamDetail;
