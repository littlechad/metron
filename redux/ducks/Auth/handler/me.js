export const AUTH_ME = 'AUTH_ME'
export const AUTH_ME_SUCCESS = 'AUTH_ME_SUCCESS'
export const AUTH_ME_FAILURE = 'AUTH_ME_FAILURE'

const me = {
  [AUTH_ME]: state => ({
    ...state,
    isLoading: true,
  }),
  [AUTH_ME_FAILURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: {
      message: payload.error.message,
    },
  }),
  [AUTH_ME_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isAuthenticated: true,
    me: payload.data,
  }),
}

export function authMe() {
  return {
    type: AUTH_ME,
  }
}
export function authMeSuccess(data) {
  return {
    type: AUTH_ME_SUCCESS,
    payload: { data },
  }
}
export function authMeFailure(error) {
  return {
    type: AUTH_ME_FAILURE,
    payload: { error },
  }
}

export default me
