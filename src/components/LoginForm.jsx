import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { login, loginReset } from '../actionCreators';
import { getLoginErrors, isLoggingIn, isLoginComplete } from '../selectors';
import SchemaForm from './SchemaForm';


const LoginForm = props => (
  <SchemaForm
    {...props}
    fields={{
      username: {
        label: 'Username',
        required: true,
      },
      password: {
        label: 'Password',
        required: true,
        type: 'password',
      },
    }}
    successURL={props.location.state.from || { pathname: '/' }}
  />
);


const mapStateToProps = state => ({
  errors: getLoginErrors(state),
  isComplete: isLoginComplete(state),
  isLoading: isLoggingIn(state),
});


const mapDispatchToProps = dispatch => ({
  onSubmit: ({username, password}) => dispatch(login(username, password)),
  onUnmount: () => dispatch(loginReset())
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
