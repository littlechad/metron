import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import Heading from 'components/Heading'

const styles = makeStyles(() => ({
  root: {
    '-webkit-box-flex': '1',
    '-webkit-flex-grow': '1',
    '-ms-flex-positive': '1',
    flexGrow: '1',
    maxWidth: '935px',
    margin: '0 auto 30px',
    padding: '20px 0 0',
    width: '100%',
    '@media (max-width: 767px)': {
      padding: '20px',
    },
  },
}))

const Component = ({ page }) => {
  const classes = styles()
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Heading title={page.title} />
          {/* eslint-disable react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: (page.content) }} />
          {/* eslint-enable react/no-danger */}
        </div>
      </Grid>
    </Grid>)
}

Component.propTypes = {
  page: PropTypes.shape({}).isRequired,
}

export const StaticPage = Component

export default StaticPage
