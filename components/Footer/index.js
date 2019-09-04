import React from 'react'

import {
  IconButton,
  makeStyles,
} from '@material-ui/core'

import Facebook from 'mdi-material-ui/Facebook'
import Instagram from 'mdi-material-ui/Instagram'
import Youtube from 'mdi-material-ui/Youtube'
import EmailOutline from 'mdi-material-ui/EmailOutline'

import {
  Container,
  ContainerItem,
} from 'components'

const styles = makeStyles(() => ({
  container: {
    width: '100%',
    '@media screen and (max-width: 767px)': {
      display: 'none',
    },
  },
  button: { padding: '10px 12px', width: '20px', color: '#fff' },
  center: { textAlign: 'center' },
  copy: { padding: '0 0 10px', margin: 0 },
  item: { padding: 0 },
  link: {
    color: '#333',
    fontWeight: '600',
    margin: '0 10px',
    textTransform: 'uppercase',
    '@media screen and (max-width: 767px)': {
      display: 'block',
    },
  },
  static: { textAlign: 'center', padding: '10px 0' },
}))

function Component() {
  const classes = styles()
  return (
    <Container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <ContainerItem md={12} sm={12} xs={12} className={classes.item}>
        <div className={classes.center}>
          <IconButton
            onClick={() => { window.open('https://instagram.com/metron', '_blank') }}
            color="default"
          >
            <Instagram width={20} height={20} />
          </IconButton>
          <IconButton
            onClick={() => { window.open('https://www.facebook.com/metron', '_blank') }}
            color="default"
          >
            <Facebook width={20} height={20} />
          </IconButton>
          <IconButton
            onClick={() => { window.open('https://www.youtube.com/user/metron', '_blank') }}
            color="default"
          >
            <Youtube width={20} height={20} />
          </IconButton>
          <IconButton
            onClick={() => { window.location = 'mailto:social@metron.com' }}
            color="default"
          >
            <EmailOutline width={20} height={20} />
          </IconButton>
        </div>
      </ContainerItem>
      <ContainerItem md={12} sm={12} xs={12} className={classes.item}>
        <div className={classes.center}>
          <p className={classes.copy}>
              &copy;
            {new Date().getFullYear()}
              &nbsp;Metron.
          </p>
        </div>
      </ContainerItem>
    </Container>
  )
}

export const Footer = Component

export default Footer
