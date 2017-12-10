import { combineReducers } from 'redux';

import auth from './auth';
import registration from './registration';
import teams from './teams';
import users from './users';


const appReducer = combineReducers({
  auth,
  registration,
  teams,
  users,
});


export default appReducer;
