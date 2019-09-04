import React from 'react'

import Component from '../component'

class Healthz extends React.Component {
  componentDidMount() {}

  render() {
    return (<Component {...this.props} />)
  }
}

export default Healthz
