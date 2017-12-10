import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { TeamList } from '../components';


const teams = [
  { id: 1, name: 'Darkside' },
  { id: 2, name: 'Triforce' },
  { id: 3, name: 'Flyers' },
];


const TeamListPage = () => (
  <div>
    <Row>
      <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
        <h1 className="text-center">My Teams</h1>
        <TeamList teams={teams}/>
      </Col>
    </Row>
  </div>
);


export default TeamListPage;
