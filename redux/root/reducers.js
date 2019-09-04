import { combineReducers } from 'redux'

import Auth from 'ducks/Auth'
import Snackbar from 'ducks/Snackbar'
import Toggle from 'ducks/Toggle'

const appReducers = combineReducers({
  Auth,
  Snackbar,
  Toggle,
})

const rootReducers = (state, action) => {
  if (action.type === 'AUTH_SIGNOUT') {
    /* eslint-disable no-param-reassign */
    state = undefined
    /* eslint-enable no-param-reassign */
  }

  return appReducers(state, action)
}


export default rootReducers
