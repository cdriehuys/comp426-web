import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { addPlayer, resetAddPlayerForm } from '../actionCreators';
import { getFormErrors, isFormComplete, isFormPending } from '../selectors';
import SchemaForm from './SchemaForm';


const PlayerForm = ({ teamId, ...rest }) => (
  <div>
    <h2 className="text-center">Add Player</h2>
    <SchemaForm
      {...rest}
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
      successURL={`/teams/${teamId}/`}
    />
  </div>
);

PlayerForm.propTypes = {
  teamId: PropTypes.number.isRequired,
};


const mapStateToProps = (state, ownProps) => ({
  errors: getFormErrors(state, 'addPlayer'),
  isComplete: isFormComplete(state, 'addPlayer'),
  isLoading: isFormPending(state, 'addPlayer'),
  teamId: parseInt(ownProps.match.params.id, 10),
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: player => dispatch(addPlayer(ownProps.match.params.id, player)),
  onUnmount: () => dispatch(resetAddPlayerForm()),
});


const ConnectedPlayerForm = connect(mapStateToProps, mapDispatchToProps)(PlayerForm);

ConnectedPlayerForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};


export default ConnectedPlayerForm;
