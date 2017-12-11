import * as actions from '../actions';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case actions.TEAM_ADD_SUCCESS:
    case actions.TEAM_FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.team.id]: action.payload.team,
      };

    case actions.TEAMS_FETCH_SUCCESS:
      return {
        ...state,
        ...action.payload.teams.reduce((acc, team) => ({
          ...acc,
          [team.id]: team,
        }), {}),
      };

    default:
      return state;
  }
}
