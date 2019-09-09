import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import {
  Typography,
} from '@material-ui/core'

import {
  Container,
  ContainerItem,
} from 'components'

import withLayout from 'lib/layout'

const styles = makeStyles(() => ({
  center: {
    textAlign: 'center',
  },
  container: {
    width: '100%',
    marginBottom: '20px',
  },
  greetings: {
    '@media screen and (max-width: 767px)': {
      marginTop: '10px',
    },
  },
  logo: {
    padding: '50px 0',
    width: '200px',
  },
}))

function Component({ auth }) {
  const classes = styles()
  return (
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
          variant="h4"
          display="block"
          color="textSecondary"
          className={classes.greetings}
        >
          {`HI, ${auth.me.user.fullname.toUpperCase()}!`}
        </Typography>
        <img
          src={process.env.LOGO_DASHBOARD}
          alt={`${process.env.COMPANY_NAME} logo`}
          className={classes.logo}
        />
      </ContainerItem>
    </Container>
  )
}

Component.propTypes = {
  auth: PropTypes.shape({}).isRequired,
}

export default withLayout(Component)
