/**
 * Functions to create actions.
 */

import * as actions from './actions';
import { APIClient } from './services';


export const loginFail = () => ({
  type: actions.LOGIN_FAIL,
});


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
    .then((data) => dispatch(loginSuccess(data.token)))
    .catch(() => dispatch(loginFail()));
}
