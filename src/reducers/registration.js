import { REGISTER_FAIL, REGISTER_RESET, REGISTER_START, REGISTER_SUCCESS } from '../actions';


const defaultState = {
  registerComplete: false,
  registerErrors: {},
  registerPending: false,
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_FAIL:
      return {
        ...state,
        ...action.payload,
        registerPending: false,
      }

    case REGISTER_RESET:
      return {
        ...state,
        registerComplete: false,
        registerErrors: {},
        registerPending: false,
      }

    case REGISTER_START:
      return {
        ...state,
        registerPending: true,
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        registerComplete: true,
        registerErrors: {},
        registerPending: false,
      }

    default:
      return state;
  }
}
