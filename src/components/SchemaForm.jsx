import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import FormField from './FormField';


class SchemaForm extends React.Component {

  static defaultProps = {
    errors: {},
    isLoading: false,
    submitText: 'Submit',
  };

  static propTypes = {
    errors: PropTypes.objectOf(
      PropTypes.arrayOf(
        PropTypes.string
      )
    ),
    fields: PropTypes.objectOf(
      PropTypes.shape({
        label: PropTypes.string,
        required: PropTypes.bool,
        type: PropTypes.string,
      })
    ),
    isLoading: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    submitText: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = Object.keys(this.props.fields).reduce((acc, key) => ({
      ...acc,
      [key]: '',
    }), {});

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <Row>
        <Col sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
          <form onSubmit={this.handleSubmit}>
            {this.renderFormErrors()}
            {Object.keys(this.props.fields).map(key => (
              <FormField
                errors={this.props.errors[key]}
                key={key}
                label={this.props.fields[key].label || key}
                name={key}
                onChange={this.handleChange}
                required={this.props.fields[key].required || false}
                type={this.props.fields[key].type || "text"}
                value={this.state[key]}
              />
            ))}

            <Button
              bsStyle="primary"
              disabled={this.props.isLoading}
              type="submit"
            >
              {this.props.submitText}
            </Button>
          </form>
        </Col>
      </Row>
    );
  }

  renderFormErrors() {
    const errors = this.props.errors.non_field_errors;

    if (!errors || errors.length === 0) {
      return null;
    }

    let content;
    if (errors.length === 1) {
      content = <p>{errors[0]}</p>;
    } else {
      content = [
        <strong>Errors:</strong>,
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>,
      ];
    }

    return (
      <div className="alert alert-danger">
        {content}
      </div>
    );
  }
}


export default SchemaForm;
