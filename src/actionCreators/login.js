import * as actions from '../actions';
import { APIClient } from '../services';


const loginFail = (errors) => ({
  type: actions.LOGIN_FAIL,
  payload: {
    loginErrors: errors,
  },
});


const loginStart = () => ({
  type: actions.LOGIN_START,
});


const loginSuccess = (token) => ({
  type: actions.LOGIN_SUCCESS,
  payload: {
    token,
  },
});


export const loginReset = () => ({
  type: actions.LOGIN_RESET,
});


export const login = (username, password) => (dispatch) => {
  dispatch(loginStart());

  return APIClient.login(username, password)
    .then(data => dispatch(loginSuccess(data.token)))
    .catch(error => dispatch(loginFail(error.response.data)));
}
