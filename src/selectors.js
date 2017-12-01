/**
 * Functions for selecting slices of state.
 */


export const getLoginErrors = state => state.auth.loginErrors;


export const isLoggingIn = state => state.auth.loginPending;
