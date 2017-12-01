/**
 * Functions to create actions.
 */

import * as actions from './actions';
import { APIClient } from './services';


export const loginFail = (errors) => ({
  type: actions.LOGIN_FAIL,
  payload: {
    loginErrors: errors,
  },
});


export const loginReset = () => ({
  type: actions.LOGIN_RESET,
})


export const loginStart = () => ({
  type: actions.LOGIN_START,
});


export const loginSuccess = (token) => ({
  type: actions.LOGIN_SUCCESS,
  payload: {
    token,
  },
});


export const login = (username, password) => (dispatch) => {
  dispatch(loginStart());

  return APIClient.login(username, password)
    .then(data => dispatch(loginSuccess(data.token)))
    .catch(error => dispatch(loginFail(error.response.data)));
}


export const logout = () => ({
  type: actions.LOGOUT,
});


export const registerFail = (errors) => ({
  type: actions.REGISTER_FAIL,
  payload: {
    registerErrors: errors,
  },
});


export const registerReset = () => ({
  type: actions.REGISTER_RESET,
});


export const registerStart = () => ({
  type: actions.REGISTER_START,
});


export const registerSuccess = () => ({
  type: actions.REGISTER_SUCCESS,
});


export const register = (username, password) => (dispatch) => {
  dispatch(registerStart());

  return APIClient.register(username, password)
    .then(data => dispatch(registerSuccess()))
    .then(dispatch(login(username, password)))
    .catch(error => dispatch(registerFail(error.response.data)));
};
