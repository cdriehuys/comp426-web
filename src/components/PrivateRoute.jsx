import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

import { isAuthenticated } from '../selectors';


const PrivateRoute = ({ component: Component, render, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated ? (
        render ? render() : <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login/',
            state: { from: props.location },
          }}
        />
      )
    )}
  />
);

PrivateRoute.defaultProps = {
  isAuthenticated: false,
};

PrivateRoute.propTypes = {
  component: PropTypes.element,
  isAuthenticated: PropTypes.bool,
  render: PropTypes.func,
};


const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});


export default withRouter(connect(mapStateToProps)(PrivateRoute));
