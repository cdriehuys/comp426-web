import React from 'react';
import { connect } from 'react-redux';

import { login, loginReset } from '../actionCreators';
import { getLoginErrors, isLoggingIn, isLoginComplete } from '../selectors';
import SchemaForm from './SchemaForm';


const PlayerForm = props => (
  <div>
    <h2 className="text-center">Add Player</h2>
    <SchemaForm
      {...props}
      fields={{
        name: {
          label: 'Name',
          required: true,
        },
        number: {
          label: 'Number',
          required: true,
          type: 'number',
        },
      }}
      successURL="/"
    />
  </div>
);


export default PlayerForm;
