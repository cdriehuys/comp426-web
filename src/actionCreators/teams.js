import * as actions from '../actions';
import { getAuthToken } from '../selectors';
import { APIClient } from '../services';


const addTeamFail = errors => ({
  type: actions.TEAM_ADD_FAIL,
  payload: {
    errors,
  },
});


const addTeamStart = () => ({
  type: actions.TEAM_ADD_START,
});


const addTeamSuccess = team => ({
  type: actions.TEAM_ADD_SUCCESS,
  payload: {
    team,
  },
});


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


export const addTeam = team => (dispatch, getState) => {
  dispatch(addTeamStart());

  const token = getAuthToken(getState());

  return APIClient.createTeam(token, team)
    .then(team => dispatch(addTeamSuccess(team)))
    .catch(error => dispatch(addTeamFail(error.response.data)));
}


export const fetchTeam = id => dispatch => APIClient.getTeam(id)
  .then(team => dispatch(fetchTeamSuccess(team)));


export const fetchTeams = () => dispatch => APIClient.getTeams()
  .then(teams => dispatch(fetchTeamsSuccess(teams)));
