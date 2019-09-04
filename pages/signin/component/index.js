import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Router } from 'config/routes'

import { makeStyles } from '@material-ui/core/styles'

import {
  Button,
  Typography,
} from '@material-ui/core'

import {
  Alert,
  Container,
  ContainerItem,
} from 'components'

import withLayout from 'lib/layout'

import { Facebook, Google } from 'mdi-material-ui'

const styles = makeStyles(theme => ({
  button: {
    margin: '0 auto',
  },
  center: {
    textAlign: 'center',
  },
  container: {
    width: '100%',
    marginBottom: '20px',
    padding: '20px 20px 56px 20px',
  },
  facebook: {
    backgroundColor: theme.palette.facebook.main,
    '&:hover': {
      backgroundColor: theme.palette.facebook.dark,
    },
  },
  google: {
    backgroundColor: theme.palette.google.main,
    '&:hover': {
      backgroundColor: theme.palette.google.dark,
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  mbottom: {
    marginBottom: '20px',
    padding: 0,
  },
}))

function Component({ auth }) {
  const classes = styles()
  return (
    <React.Fragment>

      <Container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <ContainerItem
          xs={12}
          className={classes.center}
        >
          <Typography
            variant="button"
            display="block"
            color="textSecondary"
            className={classes.mbottom}
          >
            Welcome to Metron, please sign in
          </Typography>
          <Container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <ContainerItem
              xs={12}
              className={classnames(classes.center, classes.mbottom)}
            >
              <Button
                className={classnames(classes.button, classes.google)}
                color="primary"
                onClick={() => Router.pushRoute('/auth/google')}
                size="large"
                variant="contained"
              >
                <Google className={`${classes.icon}`} />
                {' '}
                Google
              </Button>
            </ContainerItem>
            <ContainerItem
              xs={12}
              className={classnames(classes.center, classes.mbottom)}
            >
              <Button
                className={classnames(classes.button, classes.facebook)}
                color="primary"
                onClick={() => Router.pushRoute('/auth/facebook')}
                size="large"
                variant="contained"
              >
                <Facebook className={`${classes.icon}`} />
                {' '}
                Facebook
              </Button>
            </ContainerItem>
          </Container>
        </ContainerItem>
      </Container>
      {auth.isError && (
      <Alert
        duration={3000}
        message={auth.error.message}
        open={auth.isError}
        variant="error"
      />)}
    </React.Fragment>)
}

Component.propTypes = {
  auth: PropTypes.shape({}).isRequired,
}

export default withLayout(Component)
