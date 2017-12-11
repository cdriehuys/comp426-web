import PropTypes from 'prop-types';
import React from 'react';

import { PieChart } from 'react-easy-chart';

const TeamStatistics = ({ team }) => (

  <div>
    <h3>{team.name}</h3>
    <p>{team.name} has won: {team.games_won} games, and lost :  {team.games_lost} games</p>
    <PieChart
      size={200}
      innerHoleSize={100}
      labels
      styles={{
          '.chart_lines': {
          strokeWidth: 0
        },
          '.chart_text': {
          fontFamily: 'serif',
          fontSize: '80px',
          fill: '#333'
        }
      }}
      data={[
        {key: (100 * team.games_won/(team.games_won+team.games_lost)).toFixed(2)+'%', value: team.games_won, color: '#42f486 '},
        {key: (100 * team.games_lost/(team.games_won+team.games_lost)).toFixed(2)+'%', value: team.games_lost, color: '#f44165 '}
      ]}
    />
    <p> Green: Games won: {team.games_won}<br/>Red-Pink: Games lost {team.games_lost} </p>
  </div>
);

TeamStatistics.defaultProps = {
  team: [],
};

TeamStatistics.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    games_lost: PropTypes.string.isRequired,
    games_won: PropTypes.number.isRequired,
  }),
};


export default TeamStatistics;
