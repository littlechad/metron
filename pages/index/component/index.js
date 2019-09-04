import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line import/no-named-as-default-member
import Greetings from './Greetings'
import Signin from './Signin'

function Index({ auth }) {
  return auth.isAuthenticated
    ? (<Greetings auth={auth} />)
    : (<Signin auth={auth} />)
}

Index.propTypes = {
  auth: PropTypes.shape({}).isRequired,
}

export default Index
