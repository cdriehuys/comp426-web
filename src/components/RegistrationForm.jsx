import React from 'react';
import { connect } from 'react-redux';

import { register, registerReset } from '../actionCreators';
import { getRegistrationErrors, isRegistering, isRegistrationComplete } from '../selectors';
import SchemaForm from './SchemaForm';


const RegistrationForm = props => (
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
    successURL="/teams/"
  />
);


const mapStateToProps = state => ({
  errors: getRegistrationErrors(state),
  isComplete: isRegistrationComplete(state),
  isLoading: isRegistering(state),
});


const mapDispatchToProps = dispatch => ({
  onSubmit: ({username, password}) => dispatch(register(username, password)),
  onUnmount: () => dispatch(registerReset())
});


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
