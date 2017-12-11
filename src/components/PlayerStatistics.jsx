import PropTypes from 'prop-types';
import React from 'react';

import { PieChart } from 'react-easy-chart';

const PlayerStatistics = ({ player }) => (

  <div>
    <h3>{player.name}</h3>
    <p>Player number {player.number}</p>
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
        {key: (100 * .5).toFixed(2)+'%', value: 5, color: '#42f486 '},
        {key: (100 * .5).toFixed(2)+'%', value: 5, color: '#f44165 '}
      ]}
    />
    <p>hey</p>
  </div>
);

PlayerStatistics.defaultProps = {
  player: [],
};

PlayerStatistics.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    games_lost: PropTypes.string.isRequired,
    games_won: PropTypes.number.isRequired,
  }),
};


export default PlayerStatistics;