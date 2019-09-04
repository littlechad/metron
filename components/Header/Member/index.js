import React from 'react'
import PropTypes from 'prop-types'
import mobile from 'is-mobile'

import Desktop from './Desktop'
import MobileTop from './Mobile/Top'

const Member = (props) => {
  const {
    auth,
    goto,
    handleSignout,
    toggle,
    handleToggleDrawer,
  } = props
  return mobile()
    ? (
      <MobileTop
        auth={auth}
        toggle={toggle}
        handleToggleDrawer={handleToggleDrawer}
        goto={goto}
        handleSignout={handleSignout}
      />)
    : (
      <Desktop
        auth={auth}
        toggle={toggle}
        handleToggleDrawer={handleToggleDrawer}
        goto={goto}
        handleSignout={handleSignout}
      />)
}

Member.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  toggle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
  }).isRequired,
  goto: PropTypes.func.isRequired,
  handleSignout: PropTypes.func.isRequired,
  handleToggleDrawer: PropTypes.func.isRequired,
}

export default Member
