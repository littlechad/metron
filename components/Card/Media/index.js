import React from 'react'
import PropTypes from 'prop-types'

import {
  CardMedia,
  makeStyles,
} from '@material-ui/core'

const styles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}))

function Component({
  image,
  title,
}) {
  const classes = styles()
  return (
    <CardMedia
      className={classes.media}
      image={image}
      title={title}
    />)
}

Component.defaultProps = {
  title: '',
}

Component.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export const Media = Component

export default Media
