module.exports = {
  app: {
    name: process.env.APP_NAME,
    quotes: process.env.APP_QUOTES,
  },

  baseUrl: process.env.BASE_URL,
  env: process.env.NODE_ENV,
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  },
  firebase: {
    key: process.env.FIREBASE_KEY,
    url: {
      notification: process.env.FIREBASE_URL_NOTIFICATION,
    },
  },
  api: {
    host: process.env.API_HOST,
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    domain: process.env.GOOGLE_CLIENT_DOMAIN,
    scope: process.env.GOOGLE_CLIENT_SCOPE,
    storagePublicUrl: process.env.GOOGLE_STORAGE_PUBLIC_URL,
  },
  port: process.env.PORT,
  server: {
    auth: process.env.SERVER_AUTH,
    host: process.env.SERVER_HOST,
    call: process.env.SERVER_CALL,
    firebase: process.env.SERVER_FIREBASE,
    signout: process.env.SERVER_CALL_SIGNOUT,
  },
  service: {
    id: process.env.SERVICE_ID,
    secret: process.env.SERVICE_SECRET,
  },
  smd: process.env.API_SMD,
  storage: {
    banner: process.env.STORAGE_FOLDER_BANNER,
    group: process.env.STORAGE_FOLDER_GROUP,
    product: process.env.STORAGE_FOLDER_PRODUCT,
  },
  REACT_SPINKIT_NO_STYLES: process.env.REACT_SPINKIT_NO_STYLES,
}
