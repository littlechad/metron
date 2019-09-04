export const AUTH_SIGNIN = 'AUTH_SIGNIN'
export const AUTH_SIGNIN_FAILURE = 'AUTH_SIGNIN_FAILURE'
export const AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS'

const signin = {
  [AUTH_SIGNIN]: (state, { payload }) => ({
    ...state,
    me: payload.data,
    error: payload.error,
    isError: payload.isError,
    isLoading: true,
  }),
  [AUTH_SIGNIN_FAILURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: {
      message: payload.error.message,
    },
  }),
  [AUTH_SIGNIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    isAuthenticated: true,
    isLoading: false,
    me: payload.data,
  }),
}

export function authSignin(data, error, isError) {
  return {
    type: AUTH_SIGNIN,
    payload: { data, error, isError },
  }
}
export function authSigninFailure(error) {
  return {
    type: AUTH_SIGNIN_FAILURE,
    payload: { error },
  }
}
export function authSigninSuccess(data) {
  return {
    type: AUTH_SIGNIN_SUCCESS,
    payload: { data },
  }
}


export default signin
