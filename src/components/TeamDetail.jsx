import PropTypes from 'prop-types';
import React from 'react';

import { AddPlayer, PlayerList } from '../components';


const darksidePlayers = [
  { id: 1, name: 'Elijah', team: 1 },
  { id: 2, name: 'Chathan', team: 1 },
  { id: 3, name: 'Suraj', team: 1 },
  { id: 4, name: 'Sam', team: 1 },
];

const TeamDetail = ({ team }) => (
  <div>
    <h1>{team.name}</h1>
    <h2>{team.level} - {team.school}</h2>
    <PlayerList players={darksidePlayers} />
    <AddPlayer />
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
