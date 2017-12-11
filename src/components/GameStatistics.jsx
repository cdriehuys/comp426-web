import PropTypes from 'prop-types';
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import {PieChart} from 'react-easy-chart';

const GameStatistics = ({ game }) => (
  
  <div>
    <h3>{game.name} vs {game.opposing_team_name}</h3>
    <p> {game.name} : {game.points_for} to {game.opposing_team_name} : {game.points_against}</p>
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
        {key: (100 * game.points_for/(game.points_for+game.points_against))+'%', value: game.points_for, color: '#dce7c5 '},
        {key: (100 * game.points_against/(game.points_for+game.points_against))+'%', value: game.points_against, color: '#e3a51a '}
      ]}
    />
    <p>Light Green: Points {game.name} scored<br/>Red-orange: Points {game.opposing_team_name} scored </p>
  </div>
);

GameStatistics.defaultProps = {
  game: [],
};

GameStatistics.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    opposing_team_name: PropTypes.string.isRequired,
    points_for: PropTypes.number.isRequired,
    points_against: PropTypes.number.isRequired,
  }),
};


export default GameStatistics;