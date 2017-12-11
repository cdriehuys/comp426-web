import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react'
import storage from 'redux-persist/es/storage';
import reduxThunk from 'redux-thunk';

import { AppContainer } from './containers';
import appReducer from './reducers';


const config = {
  key: 'root',
  storage,
};


const reducer = persistCombineReducers(config, appReducer);


const configureStore = () => {
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(
        reduxThunk,
        logger)));
  const persistor = persistStore(store);

  return { persistor, store };
};


const { persistor, store } = configureStore();


const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);


export default App;
