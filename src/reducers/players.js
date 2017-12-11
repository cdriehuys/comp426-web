import * as actions from '../actions';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case actions.PLAYER_ADD_SUCCESS:
      return {
        ...state,
        [action.payload.player.id]: action.payload.player,
      }

    case actions.TEAM_PLAYERS_FETCH_SUCCESS:
      return {
        ...state,
        ...action.payload.players.reduce((acc, player) => ({
          ...acc,
          [player.id]: player,
        }), {}),
      };

    default:
      return state;
  }
}
