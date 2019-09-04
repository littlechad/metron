import React from 'react'
import mobile from 'is-mobile'
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core'

import {
  Logout, Home,
} from 'mdi-material-ui'

const styles = makeStyles(() => ({
  navigation: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    borderTop: '1px solid #dce0ec',
    '@media screen and (max-width: 767px)': {
      display: 'flex !important',
    },
  },
}))

const MobileBottom = ({ goto, handleSignout }) => {
  const classes = styles()
  return mobile() && (
    <BottomNavigation className={classes.navigation}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<Home />}
        onClick={goto({ page: 'home', params: { } })}
      />
      <BottomNavigationAction
        label="Discover"
        value="discover"
        icon={<Logout />}
        onClick={handleSignout('')}
      />
    </BottomNavigation>
  )
}

export default MobileBottom
