import { combineEpics } from 'redux-observable'
import { Router as navigate } from 'config/routes'

import api from 'lib/api'
import nprogress from 'lib/nprogress'
import * as auth from 'lib/auth'

import * as AuthEpics from 'observables/Auth'

function rootEpics(...args) {
  const dependencies = {
    api,
    auth,
    navigate,
    nprogress,
  }
  const allEpics = [
    ...Object.values(AuthEpics),
  ]

  return combineEpics(...allEpics)(...args, dependencies)
}

export default rootEpics
