import { combineReducers } from 'redux';

import auth from './auth';
import registration from './registration';
import users from './users';


const appReducer = combineReducers({
  auth,
  registration,
  users,
});


export default appReducer;
