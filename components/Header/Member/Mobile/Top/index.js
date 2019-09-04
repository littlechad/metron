import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  AppBar,
  Avatar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core'

import {
  Account, Logout,
} from 'mdi-material-ui'

import { Link } from 'config/routes'

const styles = makeStyles(theme => ({
  bar: {
    height: '56px',
    background: theme.palette.primary.main,
    minHeight: '56px',
    boxShadow: '0px 2px 2px rgba(66, 66, 66, 0.08)',
  },
  flex: {
    flex: 1,
    fontSize: '1rem',
    marginLeft: '5px',
  },
  logo: {
    width: '48px',
  },
  mobile: {
    '@media screen and (max-width: 767px)': {
      display: 'flex !important',
    },
  },
  smallAvatar: {
    width: 32,
    height: 32,
  },
  toolbar: {
    minHeight: '56px',
    '@media screen and (min-width: 600px)': {
      minHeight: '56px',
    },
  },
}))

const MobileTop = (props) => {
  const {
    auth,
    handleSignout,
    toggle,
    handleToggleDrawer,
  } = props
  const { user } = auth.me
  const classes = styles()
  return (
    <AppBar position="fixed" color="inherit" className={classnames(classes.mobile, classes.bar)}>
      <Toolbar disableGutters>
        <Typography
          variant="h1"
          color="inherit"
          className={classes.flex}
        >
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <Link route="home">
            <img
              src={process.env.LOGO_MAIN}
              alt={`${process.env.COMPANY_NAME} logo`}
              className={classes.logo}
            />
          </Link>
          {/* eslint-enable jsx-a11y/anchor-is-valid */}
        </Typography>


        <React.Fragment>
          <IconButton
            color="default"
            aria-owns={null}
            aria-haspopup="true"
            onClick={handleToggleDrawer('drawer', toggle.open)}
          >
            {user.profilePic
              ? (
                <Avatar
                  alt={user.fullname}
                  src={user.profilePic}
                  className={classes.smallAvatar}
                />
              )
              : <Account />}
          </IconButton>
          <Drawer
            anchor="right"
            open={toggle.name === 'drawer' && toggle.open}
            onClose={handleToggleDrawer('drawer', toggle.open)}
          >
            <List component="nav">
              <ListItem>
                <ListItemText
                  primary={auth.me.user.fullname.toUpperCase()}
                  secondary={(
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                      Never let judgment cloud your curiosity
                      </Typography>
                      {' — Metron'}
                    </React.Fragment>)}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" onClick={handleSignout('')} />
              </ListItem>
            </List>
          </Drawer>
        </React.Fragment>
      </Toolbar>
    </AppBar>
  )
}

MobileTop.propTypes = {
  auth: PropTypes.shape({
    me: PropTypes.shape({
      user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        profilePic: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  toggle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
  }).isRequired,
  handleSignout: PropTypes.func.isRequired,
  handleToggleDrawer: PropTypes.func.isRequired,
}

export default MobileTop
