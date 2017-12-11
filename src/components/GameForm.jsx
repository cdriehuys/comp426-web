import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { addGame, resetAddGameForm } from '../actionCreators';
import { getFormErrors, isFormComplete, isFormPending } from '../selectors';
import SchemaForm from './SchemaForm';


const GameForm = ({ match, ...rest }) => (
  <div>
    <h2 className="text-center">Add Game</h2>
    <SchemaForm
      {...rest}
      fields={{
        opponent: {
          label: 'Opposing Team',
          required: true,
        },
        starting_position: {
          label: 'Starting Position',
          options: {
            D: 'Defense',
            O: 'Offense',
          },
          required: true,
          type: 'radio',
        },
      }}
      successURL={`/teams/${match.params.id}/`}
    />
  </div>
);

GameForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};


const mapStateToProps = state => ({
  errors: getFormErrors(state, 'addGame'),
  isComplete: isFormComplete(state, 'addGame'),
  isLoading: isFormPending(state, 'addGame'),
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: game => dispatch(addGame(ownProps.match.params.id, game)),
  onUnmount: () => dispatch(resetAddGameForm()),
});


export default connect(mapStateToProps, mapDispatchToProps)(GameForm);
