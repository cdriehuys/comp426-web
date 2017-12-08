import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { RegistrationForm } from '../components';


const RegistrationPage = () => (
  <div>
    <Row>
      <Col sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <h1 className="text-center">Register</h1>
        <p className="text-center">
          Already have an account? <Link to="/login/">Log in here</Link>.
        </p>
      </Col>
    </Row>
    <RegistrationForm />
  </div>
);


export default RegistrationPage;
