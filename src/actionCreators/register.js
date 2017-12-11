import * as actions from '../actions';
import { APIClient } from '../services';

import { login } from './login';


const registerFail = (errors) => ({
  type: actions.REGISTER_FAIL,
  payload: {
    registerErrors: errors,
  },
});


const registerStart = () => ({
  type: actions.REGISTER_START,
});


const registerSuccess = () => ({
  type: actions.REGISTER_SUCCESS,
});


export const registerReset = () => ({
  type: actions.REGISTER_RESET,
});


export const register = (username, password) => (dispatch) => {
  dispatch(registerStart());

  return APIClient.register(username, password)
    .then(data => dispatch(registerSuccess()))
    .catch(error => dispatch(registerFail(error.response.data)))
    .then(dispatch(login(username, password)));
};
