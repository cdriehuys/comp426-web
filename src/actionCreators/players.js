import * as actions from '../actions';
import { getAuthToken } from '../selectors';
import { APIClient } from '../services';


const addPlayerFail = errors => ({
  type: actions.PLAYER_ADD_FAIL,
  payload: {
    errors,
  },
});


const addPlayerStart = () => ({
  type: actions.PLAYER_ADD_START,
});


const addPlayerSuccess = player => ({
  type: actions.PLAYER_ADD_SUCCESS,
  payload: {
    player,
  },
});


const fetchPlayersSuccess = (teamId, players) => ({
  type: actions.TEAM_PLAYERS_FETCH_SUCCESS,
  payload: {
    players,
    teamId,
  },
});


export const addPlayer = (teamId, player) => (dispatch, getState) => {
  dispatch(addPlayerStart());

  const token = getAuthToken(getState());

  return APIClient.createPlayer(token, teamId, player)
    .then(player => dispatch(addPlayerSuccess(player)))
    .catch(error => dispatch(addPlayerFail(error.response.data)));
};


export const fetchTeamPlayers = teamId => dispatch => APIClient.getTeamPlayers(teamId)
  .then(players => dispatch(fetchPlayersSuccess(teamId, players)));
