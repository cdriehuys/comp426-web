import * as actions from '../actions';
import { APIClient } from '../services';


const fetchTeamSuccess = team => ({
  type: actions.TEAM_FETCH_SUCCESS,
  payload: {
    team,
  }
})


const fetchTeamsSuccess = teams => ({
  type: actions.TEAMS_FETCH_SUCCESS,
  payload: {
    teams,
  },
});


export const fetchTeam = id => dispatch => APIClient.getTeam(id)
  .then(team => dispatch(fetchTeamSuccess(team)));


export const fetchTeams = () => dispatch => APIClient.getTeams()
  .then(teams => dispatch(fetchTeamsSuccess(teams)));
