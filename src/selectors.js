/**
 * Functions for selecting slices of state.
 */

export const getAllTeams = state => Object.keys(state.teams).map(id => state.teams[id]);


export const getAuthToken = state => state.auth.token;


export const getCurrentUser = state => state.users[state.auth.currentUser];


export const getLoginErrors = state => state.auth.loginErrors;


export const getRegistrationErrors = state => state.registration.registerErrors;


export const isAuthenticated = state => state.auth.token.length !== 0;


export const isLoggingIn = state => state.auth.loginPending;


export const isLoginComplete = state => state.auth.loginComplete;


export const isRegistering = state => state.registration.registerPending;


export const isRegistrationComplete = state => state.registration.registerComplete;
