import PropTypes from 'prop-types';
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const GamesList = ({ games }) => (
  <ListGroup>
    {games.map(game => (
      <LinkContainer key={game.id} to={`/games/${game.id}/`}>
        <ListGroupItem header={game.name} />
      </LinkContainer>
    ))}
  </ListGroup>
);

GamesList.defaultProps = {
  games: [],
};

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};


export default GamesList;