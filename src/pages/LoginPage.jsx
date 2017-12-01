import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm } from '../components';


const LoginPage = ({ match }) => (
  <div>
    <Route
      exact
      path={match.url}
      render={() => (
        <div>
          <h1 className="text-center">Log In</h1>
          <LoginForm />
        </div>
      )}
    />
    <Route
      exact
      path={`${match.url}/success/`}
      render={() => (
        <h1 className="text-center">You Are Now Logged In</h1>
      )}
    />
  </div>
);


export default LoginPage;
