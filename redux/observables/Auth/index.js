import { of } from 'rxjs'
import { combineEpics, ofType } from 'redux-observable'
import {
  catchError,
  map,
  mapTo,
  mergeMap,
} from 'rxjs/operators'

import { removeToken, setToken } from 'lib/auth'

import {
  AUTH_ME,
  authMeFailure,
  authMeSuccess,
  AUTH_ME_TEST,
  authMeTestFailure,
  authMeTestSuccess,
} from 'ducks/Auth/handler/me'

import {
  AUTH_SIGNIN,
  authSigninSuccess,
  authSigninFailure,
} from 'ducks/Auth/handler/signin'

import {
  AUTH_SIGNOUT,
  AUTH_SIGNOUT_SUCCESS,
  authSignout,
  authSignoutFailure,
  authSignoutSuccess,
} from 'ducks/Auth/handler/signout'

import apiCall from 'lib/api'

export function authMeEpic(action$, state$, { api }) {
  return action$
    .pipe(
      ofType(AUTH_ME),
      mergeMap(() => api({
        method: 'get',
        path: { url: 'AUTH_ME' },
        payloads: {
          params: {},
        },
      })
        .pipe(
          map(({ response }) => {
            const { auth, provider, user } = response
            setToken(auth.token)
            return authMeSuccess({ auth, provider, user })
          }),
          catchError(() => of(authSignout())),
        )),
      catchError(response => of(authMeFailure(response))),
    )
}

export function authSigninEpic(action$, state$) {
  return action$
    .pipe(
      ofType(AUTH_SIGNIN),
      mergeMap(() => {
        if (state$.value.Auth.isError) {
          return of(authSigninFailure(state$.value.Auth.error))
        }
        return of(authSigninSuccess())
      }),
      catchError(response => of(authSigninFailure(response))),
    )
}

export function authSignoutEpic(action$, state$, { api }) {
  return action$
    .pipe(
      ofType(AUTH_SIGNOUT),
      mergeMap(() => api({
        method: 'post',
        path: { url: 'AUTH_SIGNOUT' },
        payloads: {},
        token: state$.value.Auth.token,
      })
        .pipe(
          map(() => {
            removeToken()
            return authSignoutSuccess()
          }),
          catchError(response => of(authSignoutFailure(response))),
        )),
      catchError(response => of(authSignoutFailure(response))),
    )
}
export function authSignoutSuccessEpic(action$, state$, { navigate }) {
  return action$
    .pipe(
      ofType(AUTH_SIGNOUT_SUCCESS),
      mapTo(() => navigate.pushRoute('home')),
    )
}

export function authMeTestEpic(action$, state$, { api }) {
  return action$
    .pipe(
      ofType(AUTH_ME_TEST),
      mergeMap(() => api({
        method: 'get',
        path: { url: 'AUTH_ME' },
        payloads: {
          params: {},
        },
        token: state$.value.Auth.token,
      })
        .pipe(
          map(({ response }) => {
            const { auth, provider, user } = response
            setToken(auth.token)
            return authMeTestSuccess({ auth, provider, user })
          }),
          catchError(response => of(authSignout(response))),
        )),
      catchError(response => of(authSignout(response))),
    )
}

export const authSigninCombinedEpic = combineEpics(authSigninEpic)

export function authCombinedEpic(...args) {
  return combineEpics(
    authMeTestEpic,
  )(...args, { api: apiCall })
}
