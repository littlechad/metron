import React from 'react'
import PropTypes from 'prop-types'

import Guest from './Guest'
import Member from './Member'

const Header = (props) => {
  const {
    auth,
    goto,
    handleSignout,
    toggle,
    handleToggleDrawer,
  } = props

  return (
    auth.isAuthenticated
      ? (
        <Member
          auth={auth}
          toggle={toggle}
          goto={goto}
          handleSignout={handleSignout}
          handleToggleDrawer={handleToggleDrawer}
        />
      )
      : <Guest />
  )
}

Header.defaultProps = {
  auth: {
    isAuthenticated: false,
  },
}

Header.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }),
  toggle: PropTypes.shape({}).isRequired,
  handleToggleDrawer: PropTypes.func.isRequired,
  goto: PropTypes.func.isRequired,
  handleSignout: PropTypes.func.isRequired,
}

export default Header
