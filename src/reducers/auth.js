import { LOGIN_FAIL, LOGIN_RESET, LOGIN_START, LOGIN_SUCCESS } from '../actions';


const defaultState = {
  loginComplete: false,
  loginErrors: {},
  loginPending: false,
  token: '',
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_FAIL:
      return {
        ...state,
        ...action.payload,
        loginPending: false,
      }

    case LOGIN_RESET:
      return {
        ...state,
        loginComplete: false,
        loginErrors: {},
        loginPending: false,
      }

    case LOGIN_START:
      return {
        ...state,
        loginPending: true,
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loginComplete: true,
        loginErrors: {},
        loginPending: false,
      }

    default:
      return state;
  }
}
