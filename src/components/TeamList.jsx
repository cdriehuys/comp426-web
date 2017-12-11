import PropTypes from 'prop-types';
import React from 'react';
import { Alert, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const TeamList = ({ teams }) => (
  <div>
  {teams.length > 0 ? (
      <ListGroup>
      {teams.map(team => (
        <LinkContainer key={team.id} to={`/teams/${team.id}/`}>
          <ListGroupItem header={team.name} />
        </LinkContainer>
      ))}
    </ListGroup>
    ) : (
    <Alert>
      <h4>No Teams </h4>
      <p>This will be a lot more interesting if you add a team!</p>
    </Alert>
    )}
    <LinkContainer to="/teams/add/">
      <Button bsStyle="primary">Add Team</Button>
    </LinkContainer>

  </div>
);

TeamList.defaultProps = {
  teams: [],
};

TeamList.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};


export default TeamList;
