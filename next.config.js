const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    return config
  },
  webpackDevMiddleware: (config) => {
    /* eslint-disable no-param-reassign */
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
    /* eslint-disable no-param-reassign */
  },
}
