import PropTypes from 'prop-types';
import React from 'react';
import { Alert, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



const PlayerList = ({ players }) => (
  <div>
    <h2>Roster</h2>
    {players.length > 0 ? (
      <ListGroup>
        {players.map(player => (
          <LinkContainer key={player.id} to={`/teams/${player.team}/players/${player.id}/`} >
            <ListGroupItem header={player.name} />
          </LinkContainer>
        ))}
      </ListGroup>
    ) : (
      <Alert>
        <h4>No Players</h4>
        <p>This will be a lot more interesting if you add some players to your team.</p>
      </Alert>
    )}
  </div>
);

PlayerList.defaultProps = {
  players: [],
};

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     name: PropTypes.string.isRequired,
     number: PropTypes.number.isRequired,
     team: PropTypes.number.isRequired,
  })),
};


export default PlayerList;
