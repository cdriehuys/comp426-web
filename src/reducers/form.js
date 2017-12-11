import { combineReducers } from 'redux';

import * as actions from '../actions';


const addTeam = (state = { complete: false, errors: {}, pending: false }, action = {}) => {
  switch (action.type) {
    case actions.TEAM_ADD_FAIL:
      return {
        ...state,
        ...action.payload,
        pending: false,
      };

    case actions.TEAM_FORM_RESET:
      return {
        ...state,
        complete: false,
        errors: {},
        pending: false,
      };

    case actions.TEAM_ADD_START:
      return {
        ...state,
        pending: true,
      };

    case actions.TEAM_ADD_SUCCESS:
      return {
        ...state,
        complete: true,
        errors: {},
        pending: false,
      }

    default:
      return state;
  }
};


export default combineReducers({
  addTeam,
});
