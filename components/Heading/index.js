import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core'

const styles = makeStyles(() => ({
  heading: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    marginBottom: '20px',
    marginTop: '20px',
  },
  rightTextAlign: {
    textAlign: 'right',
  },
  leftTextAlign: {
    textAlign: 'left',
  },
  centerTextAlign: {
    textAlign: 'center',
  },
  title: {
    marginTop: '10px',
    color: '#3C4858',
    textDecoration: 'none',
  },
  subheading: {
    margin: '0 0 10px',
  },
}))

function Component({
  textAlign,
  subheading,
  title,
}) {
  const classes = styles()
  const heading = `${classes.heading
  } ${
    cx({
      [classes[`${textAlign}TextAlign`]]: textAlign !== undefined,
    })}`
  if (title !== undefined || subheading !== undefined) {
    return (
      <Paper square className={heading}>
        {title !== undefined ? (
          <Typography
            variant="h4"
            color="textSecondary"
            component="p"
            className={classes.title}
          >
            {title}
          </Typography>) : null}
        {subheading !== undefined ? (
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.subheading}
          >
            {subheading}
          </Typography>
        ) : null}
      </Paper>
    )
  }
  return null
}

Component.defaultProps = {
  title: null,
  subheading: null,
  textAlign: '',
}

Component.propTypes = {
  title: PropTypes.node,
  subheading: PropTypes.node,
  textAlign: PropTypes.string,
}

export const Heading = Component

export default Heading
