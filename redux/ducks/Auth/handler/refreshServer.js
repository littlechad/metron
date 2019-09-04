export const AUTH_REFRESH_SERVER = 'AUTH_REFRESH_SERVER'
export const AUTH_REFRESH_SERVER_SUCCESS = 'AUTH_REFRESH_SERVER_SUCCESS'
export const AUTH_REFRESH_SERVER_FAILURE = 'AUTH_REFRESH_SERVER_FAILURE'

const refresh = {
  [AUTH_REFRESH_SERVER]: state => ({
    ...state,
    isLoading: true,
    isAuthenticated: false,
  }),
  [AUTH_REFRESH_SERVER_FAILURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: {
      message: payload.error.message,
    },
  }),
  [AUTH_REFRESH_SERVER_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    refresh: payload.data,
  }),
}

export function authRefreshServer() {
  return {
    type: AUTH_REFRESH_SERVER,
  }
}
export function authRefreshServerFailure(error) {
  return {
    type: AUTH_REFRESH_SERVER_FAILURE,
    payload: { error },
  }
}
export function authRefreshServerSuccess(data) {
  return {
    type: AUTH_REFRESH_SERVER_SUCCESS,
    payload: { data },
  }
}

export default refresh
