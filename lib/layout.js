import React from 'react'
import { connect } from 'react-redux'

import { isAuthenticated } from 'lib/auth'

import { authSignout } from 'ducks/Auth/handler/signout'
// import { oneupFetch } from 'ducks/Oneup'
// import { roomInit } from 'ducks/Room'
import { snackbarClose } from 'ducks/Snackbar'
import { toggleSetData } from 'ducks/Toggle'

import NProgress from 'nprogress'

import PropTypes from 'prop-types'

import { withRouter } from 'next/router'
import mobile from 'is-mobile'

import { Router } from 'config/routes'

import Alert from 'components/Alert'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MobileBottom from 'components/Header/Member/Mobile/Bottom'

NProgress.configure({
  showSpinner: false,
})

const authRoutes = [
  '/discover',
  // '/followings',
  // '/followers',
  '/oneup_add',
  '/oneup_edit',
  '/oneup_respond',
  '/room_edit',
  '/intro',
]

const withLayout = (WrappedComponent) => {
  class WithLayout extends React.Component {
    componentDidMount() {
      const { router } = this.props
      const { pathname } = router

      if (!isAuthenticated() && pathname !== '/signin') {
        const authPages = authRoutes.includes(pathname)
        if (authPages) {
          Router.pushRoute('signin')
        }
      }
    }

    render() {
      const {
        auth,
        goto,
        handleSignout,
        router,
        snackbar,
        toggle,
        handleToggleDrawer,
        handleSnackbarClose,
      } = this.props

      Router.onRouteChangeStart = () => NProgress.start()
      Router.onRouteChangeComplete = () => NProgress.done()
      Router.onRouteChangeError = () => NProgress.done()
      return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Header
            auth={auth}
            goto={goto}
            handleSignout={handleSignout}
            toggle={toggle}
            handleToggleDrawer={handleToggleDrawer}
            visitedUsername={router.query.username ? router.query.username : ''}
          />
          <div style={{
            flex: '1 0 auto',
            paddingTop: '56px',
          }}
          >
            <WrappedComponent {...this.props} />
          </div>

          <Alert
            duration={3000}
            message={snackbar.message}
            open={snackbar.open}
            variant={snackbar.variant}
            onClose={handleSnackbarClose}
            showCloseButton
          />
          {auth.isAuthenticated && (
          <MobileBottom
            auth={auth}
            toggle={toggle}
            handleToggleDrawer={handleToggleDrawer}
            goto={goto}
            handleSignout={handleSignout}
          />)}
          <Footer />
        </div>
      )
    }
  }

  WithLayout.defaultProps = {
    auth: {
      isAuthenticated: false,
    },
    router: {
      asPath: '',
      pathname: '',
    },
  }

  WithLayout.propTypes = {
    auth: PropTypes.shape({
      isAuthenticated: PropTypes.bool,
    }),
    toggle: PropTypes.shape({}).isRequired,
    router: PropTypes.shape({
      asPath: PropTypes.string,
      pathname: PropTypes.string,
    }),
    goto: PropTypes.func.isRequired,
    handleSignout: PropTypes.func.isRequired,
    handleToggleDrawer: PropTypes.func.isRequired,
    handleToggleError: PropTypes.func.isRequired,
    handleSnackbarClose: PropTypes.func.isRequired,
  }

  const mapStateToProps = state => ({
    auth: state.Auth,
    toggle: state.Toggle,
    snackbar: state.Snackbar,
  })

  const mapDispatchToProps = dispatch => ({
    goto(data, username) {
      return (e) => {
        e.preventDefault()

        if (data.page === 'oneup' || data.page === 'oneup_respond') {
          // dispatch(oneupFetch(data.params.id))
        }

        if (data.page === 'room') {
          if (username && data.params.username !== username) {
            // dispatch(roomInit(data.params.username))
          }
        }

        Router.pushRoute(data.page, data.params)
        if (data.toggleName) {
          dispatch(toggleSetData({
            name: data.toggleName,
            open: false,
          }))
        }
      }
    },
    handleSnackbarClose() {
      dispatch(snackbarClose())
    },
    handleSignout(name) {
      return (e) => {
        e.preventDefault()
        dispatch(toggleSetData({
          name,
          open: false,
        }))
        dispatch(authSignout())
      }
    },
    handleToggleDrawer(name, open) {
      return (e) => {
        e.preventDefault()
        dispatch(toggleSetData({
          name,
          open: !open,
        }))
      }
    },
    handleToggleError(name, open) {
      dispatch(toggleSetData({
        name,
        open: !open,
      }))
    },
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(WithLayout))
}

export default withLayout
