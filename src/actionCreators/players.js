import * as actions from '../actions';
import { APIClient } from '../services';


const fetchPlayersSuccess = (teamId, players) => ({
  type: actions.TEAM_PLAYERS_FETCH_SUCCESS,
  payload: {
    players,
    teamId,
  },
});


export const fetchTeamPlayers = teamId => dispatch => APIClient.getTeamPlayers(teamId)
  .then(players => dispatch(fetchPlayersSuccess(teamId, players)));
