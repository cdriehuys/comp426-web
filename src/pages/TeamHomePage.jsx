import React from 'react';
import { Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AddPlayer from '../components/AddPlayer';

const TeamHomePage = () => (
  <div>
    <Row>
      <Col sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
        

      {/* Container */}
        <div className="text-center">
          <h1>Team Home</h1>

          <AddPlayer />

        </div>

      </Col>
    </Row>
  </div>
);


export default TeamHomePage;