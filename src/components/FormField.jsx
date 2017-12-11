import PropTypes from 'prop-types';
import React from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock, Radio } from 'react-bootstrap';


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


const FormField = ({ errors, label, name, onChange, options, required, type, value }) => (
  <FormGroup
    controlId={name}
    validationState={errors.length > 0 ? 'error' : null}
  >
    <ControlLabel>{label}</ControlLabel>
    {type === 'radio' ? (
      Object.keys(options).map(key => (
        <Radio
          name={name}
          onChange={onChange}
          required={required}
          value={key}
        >
          {options[key]}
        </Radio>
      ))
    ) : (
      <FormControl
        name={name}
        onChange={onChange}
        required={required}
        type={type}
        value={value}
    />

    )}
    {errors.length > 0 && (
      <HelpBlock>{renderErrors(errors)}</HelpBlock>
    )}
  </FormGroup>
);

FormField.defaultProps = {
  errors: [],
  options: {},
  required: false,
  type: 'text',
};

FormField.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.string),
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};


export default FormField;
