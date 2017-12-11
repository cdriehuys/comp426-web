import { combineReducers } from 'redux';

import * as actions from '../actions';


const DEFAULT_FORM_STATE = {
  complete: false,
  errors: {},
  pending: false,
};


const createFormReducer = (startAction, successAction, failAction, resetAction) =>
  (state = DEFAULT_FORM_STATE, action = {}) => {
    switch (action.type) {
      case startAction:
        return {
          ...state,
          pending: true,
        };

      case successAction:
        return {
          ...state,
          complete: true,
          errors: true,
          pending: false,
        };

      case failAction:
        return {
          ...state,
          ...action.payload,
          pending: false,
        };

      case resetAction:
        return {
          ...state,
          ...DEFAULT_FORM_STATE,
        };

      default:
        return state;
    }
  };


export default combineReducers({
  addGame: createFormReducer(
    actions.GAME_ADD_START,
    actions.GAME_ADD_SUCCESS,
    actions.GAME_ADD_FAIL,
    actions.GAME_FORM_RESET),

  addPlayer: createFormReducer(
    actions.PLAYER_ADD_START,
    actions.PLAYER_ADD_SUCCESS,
    actions.PLAYER_ADD_FAIL,
    actions.PLAYER_FORM_RESET),

  addTeam: createFormReducer(
    actions.TEAM_ADD_START,
    actions.TEAM_ADD_SUCCESS,
    actions.TEAM_ADD_FAIL,
    actions.TEAM_FORM_RESET),
});
