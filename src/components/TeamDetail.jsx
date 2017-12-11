import PropTypes from 'prop-types';
import React from 'react';
import { PageHeader, Tab, Tabs } from 'react-bootstrap';

import { TeamPlayerList } from '../containers';
import { AddPlayer } from '../components';


const darksidePlayers = [
  { id: 1, name: 'Elijah', team: 1 },
  { id: 2, name: 'Chathan', team: 1 },
  { id: 3, name: 'Suraj', team: 1 },
  { id: 4, name: 'Sam', team: 1 },
];

const TeamDetail = ({ team }) => (
  <div>
    <PageHeader>{team.name}</PageHeader>
    <Tabs defaultActiveKey={1} id="team-tabs">
      <Tab eventKey={1} title="Roster">
        <TeamPlayerList />
        <AddPlayer />
      </Tab>
      <Tab eventKey={2} title="Games">
        <p>You have not played any games.  I'm not sure if you have or not actually but this is just hard coded.</p>
      </Tab>
      <Tab eventKey={3} title="Statistics">
        <p>P1 has thrown 1000000000 turnovers.
          Ultimate Frisbee games are played to 2 billion-1
        </p>
      </Tab>
    </Tabs>
  </div>
);

TeamDetail.propTypes = {
  team: PropTypes.shape({
    level: PropTypes.string,
    name: PropTypes.string.isRequired,
    school: PropTypes.string,
  }),
};


export default TeamDetail;
