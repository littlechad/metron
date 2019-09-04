import React from 'react'
import {
  LinearProgress,
  makeStyles,
} from '@material-ui/core'

const styles = makeStyles(() => ({
  overlay: {
    position: 'fixed',
    background: 'rgba(255,255,255,.8)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: '7000',
  },
}))

function Component({ children, ...rest }) {
  const classes = styles()
  return (
    <div className={classes.overlay}>
      <LinearProgress {...rest} />
      {children}
    </div>
  )
}

export const Linear = Component

export default Linear
