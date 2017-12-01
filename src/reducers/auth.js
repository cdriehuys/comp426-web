import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from '../actions';


const defaultState = {
  loginPending: false,
  token: '',
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_FAIL:
      return {
        ...state,
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
        loginPending: false,
      }

    default:
      return state;
  }
}
