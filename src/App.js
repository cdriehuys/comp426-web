import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppContainer } from './containers';


const App = () => (
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>
);


export default App;
