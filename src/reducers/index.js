import { combineReducers } from 'redux';

import auth from './auth';
import form from './form';
import registration from './registration';
import teams from './teams';
import users from './users';


const appReducer = combineReducers({
  auth,
  form,
  registration,
  teams,
  users,
});


export default appReducer;
