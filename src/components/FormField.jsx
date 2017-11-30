import PropTypes from 'prop-types';
import React from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';


const FormField = ({ label, name, onChange, type, value }) => (
  <FormGroup controlId={name}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      name={name}
      onChange={onChange}
      type={type}
      value={value}
    />
  </FormGroup>
);

FormField.defaultProps = {
  type: 'text',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};


export default FormField;
