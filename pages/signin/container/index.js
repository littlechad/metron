import React from 'react'
import { Router } from 'config/routes'

import me from 'lib/me'

import Component from '../component'

class Container extends React.Component {
  static async getInitialProps({ req, store }) {
    const data = await me(req, store)
    return data
  }

  componentDidMount() {
    const { auth } = this.props
    if (auth.isAuthenticated) {
      Router.pushRoute('home')
    }
  }

  render() {
    return (<Component {...this.props} />)
  }
}

export default Container
