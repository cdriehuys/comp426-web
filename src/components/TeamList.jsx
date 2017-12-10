import PropTypes from 'prop-types';
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const TeamList = ({ teams }) => (
  <ListGroup>
    {teams.map(team => (
      <LinkContainer key={team.id} to={`/teams/${team.id}/`}>
        <ListGroupItem header={team.name} />
      </LinkContainer>
    ))}
  </ListGroup>
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
