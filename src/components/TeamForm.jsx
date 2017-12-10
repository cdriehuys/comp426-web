import React from 'react';
import { connect } from 'react-redux';

import { login, loginReset } from '../actionCreators';
import { getLoginErrors, isLoggingIn, isLoginComplete } from '../selectors';
import SchemaForm from './SchemaForm';


const TeamForm = props => (
  <SchemaForm
    {...props}
    fields={{
      teamname: {
        label: 'Team Name',
        required: true,
      },
      image: {
        label: 'Team Image',
        type: 'file',
        required: false,
      },

    }}
    successURL="/"
  />
);


export default TeamForm;
