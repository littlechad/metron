import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../lib/theme'


import initStore from '../redux'

export default withRedux(initStore)(class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const {
      Component, pageProps, router, store,
    } = this.props

    return (
      <Container>
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <title>{`${process.env.COMPANY_NAME}:: ${process.env.DASHBOARD_NAME}`}</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <CssBaseline />
            <Component router={router} {...pageProps} />
          </Provider>
        </ThemeProvider>
      </Container>
    )
  }
})
