import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import { AppContainer } from './containers';
import appReducer from './reducers';


const store = createStore(
  appReducer,
  applyMiddleware(
    reduxThunk,
    logger));


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>
);


export default App;
