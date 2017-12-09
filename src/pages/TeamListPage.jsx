import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { TeamList } from '../components';

const TeamListPage = () => (
  <div>
    <Row>
      <Col sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <h1>My Teams</h1>
        <TeamList teams={['Darkside','Trifroce','lyers']}/>
      </Col>
    </Row>
    
  </div>
);


export default TeamListPage;