import React from 'react'
import PropTypes from 'prop-types'

import {
  CardActions,
  makeStyles,
} from '@material-ui/core'

const styles = makeStyles(() => ({

}))

function Component({
  children,
}) {
  const classes = styles()
  return (
    <CardActions>
      {children}
    </CardActions>)
}

Component.defaultProps = {
  children: [],
}

Component.propTypes = {
  children: PropTypes.node,
}

export const Actions = Component

export default Actions
