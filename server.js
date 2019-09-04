const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookiesMiddleware = require('universal-cookie-express')
const compression = require('compression')

const chalk = require('chalk')
const express = require('express')
const figlet = require('figlet')
const nextjs = require('next')
const { app, env, port } = require('./config')
const routes = require('./config/routes')

const Api = require('./server/api')
const Auth = require('./server/auth')
const Passport = require('./server/passport')

const dev = env !== 'production'
const nextServer = nextjs({ dev })
const handler = routes.getRequestHandler(nextServer)

function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ nope: true })
  } else {
    next()
  }
}

nextServer
  .prepare()
  .then(() => {
    const server = express()
    if (!dev) {
      server.use(compression())
    }
    server.use(bodyParser.json())
    server.use(cookieParser())
    server.use(cookiesMiddleware())
    server.use(ignoreFavicon)
    server.use(Passport.initialize())

    server.get('/_healthz', (req, res) => {
      const health = {
        ts: new Date(),
        pid: process.pid,
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        status: 'ok',
      }
      res.writeHead(200, { 'Content-Type': 'application/json' })
      return res.end(JSON.stringify(health))
    })

    Auth.authGoogle(server)
    Auth.authGoogleCallback(server)
    Api.call(server)

    server.get('*', (req, res) => handler(req, res))

    server.listen(port, (error) => {
      if (error) { throw error }

      figlet
        .text(app.name, {
          font: 'Standard',
          horizontalLayout: 'full',
          verticalLayout: 'full',
        }, (err, data) => {
          if (err) { return }
          /* eslint-disable no-console */
          console.log(`\n\n\n\n\n${chalk.magenta(data)}`)
          console.log(`\n\n\n\n\n${app.quotes}`)
          console.log(`\nv${process.env.VERSION}`)
          /* eslint-enable no-console */
        })
      /* eslint-disable no-console */
      console.log(`> Ready on http://localhost:${port}`)
      /* eslint-enable no-console */
    })
  })
