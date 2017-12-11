import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

import { login, loginReset } from '../actionCreators';
import { getLoginErrors, isLoggingIn, isLoginComplete } from '../selectors';
import SchemaForm from './SchemaForm';


const TeamForm = props => (
  <div>
    <PageHeader className="text-center">Add Team</PageHeader>
    <SchemaForm
      {...props}
      fields={{
        teamname: {
          label: 'Team Name',
          required: true,
        },
      }}
      successURL="/"
    />
  </div>
);


export default TeamForm;
