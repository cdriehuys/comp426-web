import React from 'react';
import { connect } from 'react-redux';

import { login, loginReset } from '../actionCreators';
import { getLoginErrors, isLoggingIn, isLoginComplete } from '../selectors';
import SchemaForm from './SchemaForm';


const PlayerForm = props => (
  <SchemaForm
    {...props}
    fields={{
      firstname: {
        label: 'First Name',
        required: true,
      },
      lastname: {
        label: 'Last Name',
        required: true,
      },
      number: {
        label: 'Number',
        required: true,
      },
      role:{
        label: 'Role',
        required: true,
      },
    }}
    successURL="/"
  />
);


export default PlayerForm;
