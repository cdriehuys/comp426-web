/**
 * Functions for selecting slices of state.
 */


export const getLoginErrors = state => state.auth.loginErrors;


export const getRegistrationErrors = state => state.registration.registerErrors;


export const isAuthenticated = state => state.auth.token.length !== 0;


export const isLoggingIn = state => state.auth.loginPending;


export const isLoginComplete = state => state.auth.loginComplete;


export const isRegistering = state => state.registration.registerPending;


export const isRegistrationComplete = state => state.registration.registerComplete;
