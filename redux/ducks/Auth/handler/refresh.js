export const AUTH_REFRESH = 'AUTH_REFRESH'
export const AUTH_REFRESH_SUCCESS = 'AUTH_REFRESH_SUCCESS'
export const AUTH_REFRESH_FAILURE = 'AUTH_REFRESH_FAILURE'

const refresh = {
  [AUTH_REFRESH]: state => ({
    ...state,
    isLoading: true,
    isAuthenticated: false,
  }),
  [AUTH_REFRESH_FAILURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: {
      message: payload.error.message,
    },
  }),
  [AUTH_REFRESH_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    refresh: payload.data,
  }),
}

export function authRefresh() {
  return {
    type: AUTH_REFRESH,
  }
}
export function authRefreshFailure(error) {
  return {
    type: AUTH_REFRESH_FAILURE,
    payload: { error },
  }
}
export function authRefreshSuccess(data) {
  return {
    type: AUTH_REFRESH_SUCCESS,
    payload: { data },
  }
}

export default refresh
