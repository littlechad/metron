import React from 'react'
import PropTypes from 'prop-types'

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core'

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
  toolbar: {
    minHeight: '56px',
    '@media screen and (min-width: 600px)': {
      minHeight: '56px',
    },
  },
}))

const Guest = () => {
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
      </Toolbar>
    </AppBar>
  )
}

export default Guest
