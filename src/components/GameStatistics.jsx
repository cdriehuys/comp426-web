import PropTypes from 'prop-types';
import React from 'react';
import {PieChart} from 'react-easy-chart';
import { connect } from 'react-redux';

import { getGame, getTeam } from '../selectors';


const GameStatistics = ({ game, team }) => (

  <div>
    <h3>{team.name} vs {game.opponent}</h3>
    <p> {team.name} : {game.home_points} to {game.opponent} : {game.opponent_points}</p>
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
        {key: (100 * game.home_points/(game.home_points+game.opponent_points)).toFixed(2)+'%', value: game.home_points, color: '#dce7c5 '},
        {key: (100 * game.opponent_points/(game.home_points+game.opponent_points)).toFixed(2)+'%', value: game.opponent_points, color: '#e3a51a '}
      ]}
    />
    <p>Light Green: Points {team.name} scored<br/>Red-orange: Points {game.opponent} scored </p>
  </div>
);

GameStatistics.defaultProps = {
  game: [], 
};

GameStatistics.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    opponent: PropTypes.string.isRequired,
    home_points: PropTypes.number.isRequired,
    opponent_points: PropTypes.number.isRequired,
  }),
};


const mapStateToProps = (state, ownProps) => {
  const game = getGame(state, ownProps.match.params.gameId);
  const team = getTeam(state, game.team);

  return { game, team };
};


export default connect(mapStateToProps)(GameStatistics);
