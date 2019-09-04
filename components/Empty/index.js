import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Heading from 'components/Heading'

import FileDocumentBox from 'mdi-material-ui/FileDocumentBox'

const styles = makeStyles(() => ({
  empty: { width: '100%', textAlign: 'center', margin: '30px 0' },
  emptyIcon: { fontSize: '100px' },
}))

function Component({ subheading, title }) {
  const classes = styles()
  return (
    <div className={classes.empty}>
      <FileDocumentBox color="primary" className={classes.emptyIcon} />
      <Heading
        textAlign="center"
        title={title}
        subheading={subheading}
      />
    </div>)
}

Component.defaultProps = {
  subheading: '',
  title: '',
}

Component.propTypes = {
  subheading: PropTypes.string,
  title: PropTypes.string,
}

export const Empty = Component

export default Empty
