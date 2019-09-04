const routes = require('next-routes')()

routes
  .add('_healthz', '/_healthz', '_healthz')

  .add('facebook_callback', '/auth/facebook/callback', 'facebook_callback')
  .add('google_callback', '/auth/google/callback', 'google_callback')

  .add('home', '/', 'index')

  .add('signin', '/signin', 'signin')

module.exports = routes
