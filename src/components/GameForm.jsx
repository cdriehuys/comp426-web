import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

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


export default GameForm;
