import * as actions from '../actions';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case actions.TEAM_ADD_SUCCESS:
    case actions.TEAM_FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.team.id]: {
          ...state[action.payload.team.id],
          ...action.payload.team,
        },
      };

    case actions.TEAMS_FETCH_SUCCESS:
      return {
        ...state,
        ...action.payload.teams.reduce((acc, team) => ({
          ...acc,
          [team.id]: {
            ...state[team.id],
            ...team,
          },
        }), {}),
      };

    case actions.TEAM_PLAYERS_FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.teamId]: {
          ...state[action.payload.teamId],
          players: action.payload.players.map(player => player.id),
        },
      };

    default:
      return state;
  }
}
