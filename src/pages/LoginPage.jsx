import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { LoginForm } from '../components';

const LoginPage = () => (
  <div>
    <Row>
      <Col sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <h1 className="text-center">Log In</h1>
        <p className="text-center">
          Don't have an account? <Link to="/register/">Register here</Link>.
        </p>
      </Col>
    </Row>
    <LoginForm />
  </div>
);


export default LoginPage;
