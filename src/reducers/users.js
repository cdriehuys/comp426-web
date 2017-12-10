import { PROFILE_FETCH_SUCCESS } from '../actions';


export default (state = {}, action) => {
  switch(action.type) {
    case PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.profile.id]: action.payload.profile,
      };

    default:
      return state;
  }
}
