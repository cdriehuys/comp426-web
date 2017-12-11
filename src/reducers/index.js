import { combineReducers } from 'redux';

import auth from './auth';
import form from './form';
import players from './players';
import registration from './registration';
import teams from './teams';
import users from './users';


export default {
  auth,
  form,
  players,
  registration,
  teams,
  users,
};
