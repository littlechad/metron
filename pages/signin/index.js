import { connect } from 'react-redux'
import Container from './container'

function mapStateToProps(state) {
  return {
    auth: state.Auth,
  }
}

function mapDispatchToProps() {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container)
