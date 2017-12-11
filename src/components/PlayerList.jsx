import PropTypes from 'prop-types';
import React from 'react';
import { Alert, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const PlayerList = ({ canEdit, players }) => (
  <div>
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
        {canEdit ? (
          <p>This will be a lot more interesting if you add some players to your team.</p>
        ) : (
          <p>Hopefully this team rosters some players or they're not gonna do very well...</p>
        )}
      </Alert>
    )}
  </div>
);

PlayerList.defaultProps = {
  canEdit: false,
  players: [],
};

PlayerList.propTypes = {
  canEdit: PropTypes.bool,
  players: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     name: PropTypes.string.isRequired,
     number: PropTypes.number.isRequired,
     team: PropTypes.number.isRequired,
  })),
};


export default PlayerList;
