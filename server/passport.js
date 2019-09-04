const chalk = require('chalk')
const passport = require('passport')
const fetch = require('node-fetch')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy

const {
  baseUrl, env, facebook, api, google, port, server, service,
} = require('../config')

const callbackURLGoogle = env === 'development'
  ? `${baseUrl}:${port}${server.auth}/google/callback`
  : `${baseUrl}${server.auth}/google/callback`

const callbackURLFacebook = env === 'development'
  ? `${baseUrl}:${port}${server.auth}/facebook/callback`
  : `${baseUrl}${server.auth}/facebook/callback`

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

passport.use(new GoogleStrategy(
  {
    clientID: google.clientID,
    clientSecret: google.clientSecret,
    callbackURL: callbackURLGoogle,
    passReqToCallback: true,
  },
  ((request, accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          accessToken,
          refreshToken,
          profile,
        }),
        headers: {
          'Content-Type': 'application/json',
          serviceId: service.id,
          serviceSecret: service.secret,
        },
      }
      const uri = `${api.host}/auth/signin`

      /* eslint-disable no-console */
      console.log(`${chalk.blue('[API CALL]:')} ${chalk.green('POST')} ${chalk.white(uri)}`)
      console.log(`${chalk.green('[BODY]:')} ${chalk.green(JSON.stringify(options))}`)
      /* eslint-enable no-console */

      return fetch(uri, options)
        .then(response => response.json())
        .then(response => done(null, response))
        .catch(error => done(error, null))
    })
  }),
))

passport.use(new FacebookStrategy(
  {
    clientID: facebook.clientID,
    clientSecret: facebook.clientSecret,
    callbackURL: callbackURLFacebook,
    enableProof: true,
    profileFields: ['id', 'name', 'email', 'picture.type(large)'],
  },
  ((request, accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          accessToken,
          refreshToken,
          profile,
        }),
        headers: {
          'Content-Type': 'application/json',
          serviceId: service.id,
          serviceSecret: service.secret,
        },
      }
      const uri = `${api.host}/auth/signin`

      /* eslint-disable no-console */
      console.log(`${chalk.blue('[API CALL]:')} ${chalk.green('POST')} ${chalk.white(uri)}`)
      console.log(`${chalk.green('[BODY]:')} ${chalk.green(JSON.stringify(options))}`)
      /* eslint-enable no-console */

      return fetch(uri, options)
        .then(response => response.json())
        .then(response => done(null, response))
        .catch(error => done(error, null))
    })
  }),
))

const Passport = passport

module.exports = Passport
