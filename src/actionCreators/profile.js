import * as actions from '../actions';
import { getAuthToken } from '../selectors';
import { APIClient } from '../services';


const fetchProfileStart = () => ({
  type: actions.PROFILE_FETCH_START,
});


const fetchProfileSuccess = profile => ({
  type: actions.PROFILE_FETCH_SUCCESS,
  payload: {
    profile,
  },
});


export const fetchProfile = () => (dispatch, getState) => {
  dispatch(fetchProfileStart());

  const token = getAuthToken(getState());

  return APIClient.getProfile(token)
    .then(profile => dispatch(fetchProfileSuccess(profile)));
}
