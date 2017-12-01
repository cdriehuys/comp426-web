import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { login } from '../actionCreators';
import { isLoggingIn } from '../selectors';
import FormField from './FormField';


class LoginForm extends React.Component {

  static defaultProps = {
    isLoading: false,
  };

  static propTypes = {
    isLoading: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      password: '',
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {
    return (
      <Row>
        <Col sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
          <form onSubmit={this.handleSubmit}>
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
              type="password"
              value={this.state.password}
            />

            <Button
              bsStyle="primary"
              disabled={this.props.isLoading}
              type="submit"
            >
              Log In
            </Button>
          </form>
        </Col>
      </Row>
    );
  }
}


const mapStateToProps = state => ({
  isLoading: isLoggingIn(state),
});


const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => dispatch(login(username, password)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
