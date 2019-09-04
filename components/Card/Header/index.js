import React from 'react'
import PropTypes from 'prop-types'

import {
  CardHeader,
  makeStyles,
} from '@material-ui/core'

const styles = makeStyles(theme => ({
  blue: {
    padding: '5px',
    backgroundColor: theme.palette.blue.main,
  },
  default: {
    padding: '5px',
    backgroundColor: theme.palette.default.main,
  },
  green: {
    padding: '5px',
    backgroundColor: theme.palette.green.main,
  },
  purple: {
    padding: '5px',
    backgroundColor: theme.palette.purple.main,
  },
  red: {
    padding: '5px',
    backgroundColor: theme.palette.red.main,
  },
  title: {
    fontSize: '14px',
    fontWeight: 600,
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  },
  titleRandom: {
    fontSize: '14px',
    fontWeight: 600,
    color: theme.palette.default.main,
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  },
  subheader: {

  },
  subheaderRandom: {
    color: theme.palette.default.main,
  },
  avatar: {
    marginRight: '5px',
  },
}))

function Component({
  action,
  avatar,
  random,
  title,
  subheader,
}) {
  const classes = styles()
  const backgrounds = ['blue', 'green', 'purple', 'red']
  const background = random
    ? backgrounds[Math.floor(Math.random() * backgrounds.length)]
    : 'default'
  const t = random ? 'titleRandom' : 'title'
  const s = random ? 'subheaderRandom' : 'subheader'

  return (
    <CardHeader
      classes={{
        avatar: classes.avatar,
        root: classes[background],
        subheader: classes[s],
        title: classes[t],
      }}
      avatar={avatar}
      action={action}
      title={title}
      subheader={subheader}
    />)
}

Component.defaultProps = {
  random: false,
  action: [],
  avatar: [],
  title: '',
  subheader: '',
}
Component.propTypes = {
  random: PropTypes.bool,
  action: PropTypes.node,
  avatar: PropTypes.node,
  title: PropTypes.string,
  subheader: PropTypes.string,
}

export const Header = Component

export default Header
