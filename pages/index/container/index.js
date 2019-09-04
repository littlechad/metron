import React from 'react'

import me from 'lib/me'
import Component from '../component'

class Container extends React.Component {
  static async getInitialProps({ req, store }) {
    const data = await me(req, store)
    return data
  }

  componentDidMount() {
  }

  render() {
    return (<Component {...this.props} />)
  }
}

export default Container
