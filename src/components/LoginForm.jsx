import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actionCreators';
import { getLoginErrors, isLoggingIn } from '../selectors';
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
  />
);


const mapStateToProps = state => ({
  errors: getLoginErrors(state),
  isLoading: isLoggingIn(state),
});


const mapDispatchToProps = dispatch => ({
  onSubmit: ({username, password}) => dispatch(login(username, password)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
