import * as actions from '../actions';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case actions.GAME_ADD_SUCCESS:
      return {
        ...state,
        [action.payload.game.team]: {
          ...state[action.payload.game.team],
          games: [...state[action.payload.game.team].games, action.payload.game.id],
        },
      }

    case actions.PLAYER_ADD_SUCCESS:
      return {
        ...state,
        [action.payload.player.team]: {
          ...state[action.payload.player.team],
          players: [...state[action.payload.player.team].players, action.payload.player.id],
        },
      };

    case actions.TEAM_ADD_SUCCESS:
    case actions.TEAM_FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.team.id]: {
          ...state[action.payload.team.id],
          ...action.payload.team,
        },
      };

    case actions.TEAM_GAMES_FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.teamId]: {
          ...state[action.payload.teamId],
          games: action.payload.games.map(game => game.id),
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
