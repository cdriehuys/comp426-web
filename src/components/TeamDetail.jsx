import PropTypes from 'prop-types';
import React from 'react';


const MyTeam = ({ team }) => (
  <div>
    <h1>{team.name}</h1>
    <h2>{team.level} - {team.school}</h2>
  </div>
);

MyTeam.propTypes = {
  team: PropTypes.shape({
    level: PropTypes.string,
    name: PropTypes.string.isRequired,
    school: PropTypes.string,
  }),
};


export default MyTeam;