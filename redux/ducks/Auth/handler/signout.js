export const AUTH_SIGNOUT = 'AUTH_SIGNOUT'
export const AUTH_SIGNOUT_SUCCESS = 'AUTH_SIGNOUT_SUCCESS'
export const AUTH_SIGNOUT_FAILURE = 'AUTH_SIGNOUT_FAILURE'

const refresh = {
  [AUTH_SIGNOUT]: state => ({
    ...state,
    isLoading: true,
    isAuthenticated: false,
  }),
  [AUTH_SIGNOUT_FAILURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: {
      message: payload.error.message,
    },
  }),
  [AUTH_SIGNOUT_SUCCESS]: state => ({
    ...state,
    isLoading: false,
  }),
}

export function authSignout() {
  return {
    type: AUTH_SIGNOUT,
  }
}
export function authSignoutFailure(error) {
  return {
    type: AUTH_SIGNOUT_FAILURE,
    payload: { error },
  }
}
export function authSignoutSuccess() {
  return {
    type: AUTH_SIGNOUT_SUCCESS,
  }
}

export default refresh
