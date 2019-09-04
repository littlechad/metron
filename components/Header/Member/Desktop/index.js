import React from 'react'
import PropTypes from 'prop-types'

import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,

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
  },
  logo: {
    width: '48px',
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
  up: {
    width: '28px',
    height: '28px',
  },
}))

const Desktop = (props) => {
  const {
    auth,
    toggle,
    handleSignout,
    handleToggleDrawer,
  } = props
  const { user } = auth.me
  const classes = styles()

  return (
    <AppBar position="fixed" color="inherit" className={classes.bar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h1"
          color="inherit"
          className={classes.flex}
        >
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <Link route="home">
            <a>
              <img
                src={process.env.LOGO_MAIN}
                alt={`${process.env.COMPANY_NAME} logo`}
                className={classes.logo}
              />
            </a>
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

Desktop.propTypes = {
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

export default Desktop
