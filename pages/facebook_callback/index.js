import { connect } from 'react-redux'

import Container from './container'

function mapStateToProps(state) {
  return {
    auth: state.Auth,
    signin: state.Signin,
  }
}
function mapDispatchToProps() {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container)
