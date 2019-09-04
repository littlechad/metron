import React from 'react'

import { Subject } from 'rxjs'
import { StateObservable } from 'redux-observable'

import { Router } from 'config/routes'

import Component from '../component'

class Container extends React.Component {
  static async getInitialProps({ req, store }) {
    const state$ = new StateObservable(new Subject(), store.getState())
    const {
      auth, provider, user, error,
    } = req.user

    let me = { auth: {}, detail: {}, user: {} }

    if (!error) {
      me = { auth, provider, user }

      req.universalCookies.set('token', auth.token)
      state$.value.Auth.token = auth.token

      return {}
    }

    state$.value.Auth.me = me

    return {}
  }

  componentDidMount() {
    Router.pushRoute('home')
  }

  render() {
    return (<Component {...this.props} />)
  }
}

export default Container
