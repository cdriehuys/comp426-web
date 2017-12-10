import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { MyTeam } from '../components';

const darkside = {
  name: 'Darkside',
  school: 'UNC',
  level: 'College',
};

const setTeamInfo =(arr) => {
  name: arr[1];
}

const MyTeamPage = () => (
  <div>
    <Row>
      <Col sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <MyTeam team={darkside}/>
      </Col>
    </Row>
  </div>
);


export default MyTeamPage;