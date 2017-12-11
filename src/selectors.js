/**
 * Functions for selecting slices of state.
 */

export const getAllTeams = state => Object.keys(state.teams).map(id => state.teams[id]);


export const getAuthToken = state => state.auth.token;


export const getCurrentUser = state => state.users[state.auth.currentUser];


export const getFormErrors = (state, formName) => (
  state.form[formName] ? state.form[formName].errors : {}
);


export const getLoginErrors = state => state.auth.loginErrors;


export const getPlayer = (state, playerId) => state.players[playerId];


export const getRegistrationErrors = state => state.registration.registerErrors;


export const getTeam = (state, teamId) => state.teams[teamId];


export const getTeamPlayers = (state, teamId) => {
  const team = state.teams[teamId];

  if (!(team && team.players)) {
    return [];
  }

  return team.players.map(id => getPlayer(state, id));
}


export const getUserTeams = (state, user) => getAllTeams(state)
  .filter(team => team.user === user.id);


export const isAuthenticated = state => state.auth.token.length !== 0;


export const isFormComplete = (state, formName) => (
  state.form[formName] && state.form[formName].complete
);


export const isFormPending = (state, formName) => (
  state.form[formName] && state.form[formName].pending
);


export const isLoggingIn = state => state.auth.loginPending;


export const isLoginComplete = state => state.auth.loginComplete;


export const isRegistering = state => state.registration.registerPending;


export const isRegistrationComplete = state => state.registration.registerComplete;
