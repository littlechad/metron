import React from 'react'
import PropTypes from 'prop-types'

import {
  CardContent,
  makeStyles,
} from '@material-ui/core'

const styles = makeStyles(() => ({

}))

function Component({
  children,
  ...rest
}) {
  const classes = styles()
  return (
    <CardContent {...rest}>
      {children}
    </CardContent>)
}

Component.defaultProps = {
  children: [],
}

Component.propTypes = {
  children: PropTypes.node,
}

export const Content = Component

export default Content
