import * as actions from '../actions';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case actions.GAME_ADD_SUCCESS:
      return {
        ...state,
        [action.payload.game.id]: action.payload.game,
      }

    default:
      return state;
  }
}
