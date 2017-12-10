import * as actions from '../actions';
import { APIClient } from '../services';


const fetchTeamsSuccess = teams => ({
  type: actions.TEAMS_FETCH_SUCCESS,
  payload: {
    teams,
  },
});


export const fetchTeams = () => dispatch => APIClient.getTeams()
  .then(teams => dispatch(fetchTeamsSuccess(teams)));
