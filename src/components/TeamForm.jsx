import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

import { addTeam, resetAddTeamForm } from '../actionCreators';
import { getFormErrors, isFormComplete, isFormPending } from '../selectors';
import SchemaForm from './SchemaForm';


const TeamForm = props => (
  <div>
    <PageHeader className="text-center">Add Team</PageHeader>
    <SchemaForm
      {...props}
      fields={{
        name: {
          label: 'Team Name',
          required: true,
        },
      }}
      successURL="/teams/"
    />
  </div>
);


const mapStateToProps = state => ({
  errors: getFormErrors(state, 'addTeam'),
  isComplete: isFormComplete(state, 'addTeam'),
  isLoading: isFormPending(state, 'addTeam'),
});


const mapDispatchToProps = dispatch => ({
  onSubmit: team => dispatch(addTeam(team)),
  onUnmount: () => dispatch(resetAddTeamForm()),
});


export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);
