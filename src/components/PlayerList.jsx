import PropTypes from 'prop-types';
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const PlayerList = ({ players }) => (
  <div>
    <h4>Roster-</h4>
    <ListGroup>
      {players.map(player => (
        <LinkContainer key={player.id} to={`/teams/${player.team}/players/${player.id}/`} >
          <ListGroupItem header={player.name} />
        </LinkContainer>
      ))}
  </ListGroup>
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