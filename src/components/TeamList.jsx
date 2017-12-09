import PropTypes from 'prop-types';
import React from 'react';


const TeamList = ({ teams }) => (
  <ul>
    {teams.map(team => <li key={team}>{team}</li>)}
  </ul>
);

TeamList.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default TeamList;