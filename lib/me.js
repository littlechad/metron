import { of, Subject } from 'rxjs'
import { StateObservable } from 'redux-observable'

import { authMeTest } from 'ducks/Auth/handler/me'

import { authCombinedEpic } from 'observables/Auth'


export default async function me(req, store) {
  const state$ = new StateObservable(new Subject(), store.getState())

  if (req) {
    const { token } = req.cookies
    if (token) {
      state$.value.Auth.token = token
      const data = await authCombinedEpic(
        of(authMeTest()),
        state$,
      ).toPromise()
      store.dispatch(data)

      if (!data.payload) {
        req.universalCookies.remove('token')
        return { isAuthenticated: false }
      }

      state$.value.Auth.me = data.payload.data
      return { isAuthenticated: true }
    }
  }

  if (state$.value.Auth.token !== '') {
    const data = await authCombinedEpic(
      of(authMeTest()),
      state$,
    ).toPromise()
    store.dispatch(data)
    state$.value.Auth.me = data.payload.data

    return { isAuthenticated: true }
  }

  return { isAuthenticated: false }
}
