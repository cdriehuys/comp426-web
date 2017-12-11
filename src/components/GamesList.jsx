import PropTypes from 'prop-types';
import React from 'react';
import { Alert, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const GamesList = ({ games }) => (
  <div>
    {games.length > 0 ? (
    <ListGroup>
      {games.map(game => (
        <LinkContainer key={game.id} to={`/teams/${game.team}/games/${game.id}/`}>
          <ListGroupItem header={game.opponent} />
        </LinkContainer>
      ))}
    </ListGroup>
      ) : (
        <Alert>
          <h4>No Recorded Games</h4>
          <p>No games have been added for this team.</p>
        </Alert>
      )}
    </div>
);

GamesList.defaultProps = {
  games: [],
};

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    oppenent: PropTypes.string.isRequired,
  })),
};


export default GamesList;
