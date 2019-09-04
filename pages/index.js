import { connect } from 'react-redux'

import Container from './index/container'

function mapStateToProps(state) {
  return {
    auth: state.Auth,
  }
}

function mapDispatchToProps() {
  return {
    handler: {

    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container)
