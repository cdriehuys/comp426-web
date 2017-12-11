import PropTypes from 'prop-types';
import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import AddTeam from './AddTeam';


const TeamList = ({ canEdit, teams }) => (
  <div>
    {canEdit && (
      <LinkContainer to="/teams/add/">
        <Button bsStyle="primary">Add Team</Button>
      </LinkContainer>
    )}
    <ListGroup>
      {teams.map(team => (
        <LinkContainer key={team.id} to={`/teams/${team.id}/`}>
          <ListGroupItem header={team.name} />
        </LinkContainer>
      ))}
    </ListGroup>
  </div>
);

TeamList.defaultProps = {
  canEdit: false,
  teams: [],
};

TeamList.propTypes = {
  canEdit: PropTypes.bool,
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};


export default TeamList;
