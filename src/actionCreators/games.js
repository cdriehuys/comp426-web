import * as actions from '../actions';
import { getAuthToken } from '../selectors';
import { APIClient } from '../services';


const addGameFail = errors => ({
  type: actions.GAME_ADD_FAIL,
  payload: {
    errors,
  },
});


const addGameStart = () => ({
  type: actions.GAME_ADD_START,
});


const addGameSuccess = game => ({
  type: actions.GAME_ADD_SUCCESS,
  payload: {
    game,
  },
});


export const addGame = (teamId, game) => (dispatch, getState) => {
  dispatch(addGameStart());

  const token = getAuthToken(getState());

  return APIClient.createGame(token, teamId, game)
    .then(game => dispatch(addGameSuccess(game)))
    .catch(error => dispatch(addGameFail(error.response.data)));
}
