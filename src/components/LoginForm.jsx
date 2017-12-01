import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { login } from '../actionCreators';
import { getLoginErrors, isLoggingIn } from '../selectors';
import FormField from './FormField';


class LoginForm extends React.Component {

  static defaultProps = {
    errors: {},
    isLoading: false,
  };

  static propTypes = {
    errors: PropTypes.shape({
      non_field_errors: PropTypes.arrayOf(PropTypes.string),
      password: PropTypes.arrayOf(PropTypes.string),
      username: PropTypes.arrayOf(PropTypes.string)}),
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
            {this.renderFormErrors()}
            <FormField
              errors={this.props.errors.username}
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

  renderFormErrors() {
    const errors = this.props.errors.non_field_errors;

    if (!errors) {
      return null;
    }

    if (errors.length === 1) {
      return <div className="alert alert-danger">{errors[0]}</div>;
    }

    return (
      <div className="alert alert-danger">
        <strong>Errors:</strong>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  errors: getLoginErrors(state),
  isLoading: isLoggingIn(state),
});


const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => dispatch(login(username, password)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
