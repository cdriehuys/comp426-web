import React from 'react';
import { Button, Col, ControlLabel, FormControl, FormGroup, Row } from 'react-bootstrap';


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
            <FormGroup controlId="username">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                name="username"
                onChange={this.handleChange}
                type="text"
                value={this.state.username}
              />
            </FormGroup>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                name="password"
                onChange={this.handleChange}
                type="password"
                value={this.state.password}
              />
            </FormGroup>
          </form>

          <Button bsStyle="primary">Log In</Button>
        </Col>
      </Row>
    );
  }
}


export default LoginForm;
