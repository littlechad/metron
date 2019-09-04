import reducer from 'lib/reducer'

import me from './handler/me'
import refresh from './handler/refresh'
import refreshServer from './handler/refreshServer'
import signin from './handler/signin'
import signout from './handler/signout'

const initialState = {
  refresh: {
    accessToken: '',
    expiresIn: 0,
  },
  token: '',
  error: {
    message: '',
  },
  isAuthenticated: false,
  isError: false,
  isLoading: false,
  me: {
    auth: {},
    provider: [],
    user: {},
  },
}

const Auth = reducer(
  Object.assign(
    me,
    refresh,
    refreshServer,
    signin,
    signout,
  ),
  initialState,
)

export default Auth
