import PropTypes from 'prop-types';
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const GameStatistics = ({ game }) => (
  
  <div>
    <h3>{game.name} vs {game.opposing_team_name}</h3>
    <h4>~final score~</h4>
    <p> {game.name} : {game.points_for} to {game.opposing_team_name} : {game.points_against}</p>
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