import { combineReducers } from 'redux';

import auth from './auth';
import registration from './registration';


const appReducer = combineReducers({
  auth,
  registration,
});


export default appReducer;
