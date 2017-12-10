import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { isAuthenticated } from '../selectors';


const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated ? (
        <Component {...props} />
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
  isAuthenticated: PropTypes.bool,
};


const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});


export default connect(mapStateToProps)(PrivateRoute);
