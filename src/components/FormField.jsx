import PropTypes from 'prop-types';
import React from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';


const renderErrors = (errors) => {
  if (errors.length === 1) {
    return errors[0];
  }

  return (
    <ul>
      {errors.map(error => <li key={error}>{error}</li>)}
    </ul>
  );
}


const FormField = ({ errors, label, name, onChange, type, value }) => (
  <FormGroup
    controlId={name}
    validationState={errors.length > 0 ? 'error' : null}
  >
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      name={name}
      onChange={onChange}
      type={type}
      value={value}
    />
    {errors.length > 0 && (
      <HelpBlock>{renderErrors(errors)}</HelpBlock>
    )}
  </FormGroup>
);

FormField.defaultProps = {
  errors: [],
  type: 'text',
};

FormField.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};


export default FormField;
