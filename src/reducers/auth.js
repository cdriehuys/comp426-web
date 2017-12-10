import {
  LOGIN_FAIL,
  LOGIN_RESET,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  PROFILE_FETCH_SUCCESS,
} from '../actions';


const defaultState = {
  currentUser: null,
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

    case LOGOUT:
      return {
        ...state,
        currentUser: null,
        token: '',
      }

    case PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.profile.id,
      }

    default:
      return state;
  }
}
