import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import FormField from './FormField';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <Row>
        <Col sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
          <form>
            <FormField
              label="Username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <FormField
              label="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </form>

          <Button bsStyle="primary">Log In</Button>
        </Col>
      </Row>
    );
  }
}


export default LoginForm;
