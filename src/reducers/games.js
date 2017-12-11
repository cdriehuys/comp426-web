import * as actions from '../actions';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case actions.GAME_ADD_SUCCESS:
      return {
        ...state,
        [action.payload.game.id]: action.payload.game,
      };

    case actions.TEAM_GAMES_FETCH_SUCCESS:
      return {
        ...state,
        ...action.payload.games.reduce((acc, game) => ({
          ...acc,
          [game.id]: {
            ...state[game.id],
            ...game,
          },
        }), {}),
      };

    default:
      return state;
  }
}
