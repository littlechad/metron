import React from 'react'
import PropTypes from 'prop-types'

import {
  makeStyles,
} from '@material-ui/core'

import C from '@material-ui/core/Card'

import { Actions } from './Actions'
import { Content } from './Content'
import { Header } from './Header'
import { Media } from './Media'

const styles = makeStyles(() => ({
  card: {
    boxShadow: '0 2px 0 rgba(0,0,0,0.06)',
    borderRadius: '5px 5px 4px 4px',
  },
}))

function Component({
  children,
  ...rest
}) {
  const classes = styles()
  return (
    <C
      className={classes.card}
      {...rest}
    >
      {children}
    </C>)
}

Component.defaultProps = {
  children: [],
}

Component.propTypes = {
  children: PropTypes.node,
}

export const Card = Component
export const CardActions = Actions
export const CardContent = Content
export const CardHeader = Header
export const CardMedia = Media

export default Card
