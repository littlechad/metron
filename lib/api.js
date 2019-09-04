import { ajax } from 'rxjs/ajax'
import XMLHttpRequest from 'xhr2'
import {
  env, port, server,
} from 'config'

import * as endpoints from 'config/endpoint'

import * as auth from 'lib/auth'
import generateEndpoint from 'lib/endpoint'

const { host, call } = server

function parse(data) {
  const {
    method, path, payloads, token,
  } = data
  const { url, params } = path
  const endpoint = generateEndpoint(endpoints[url], params)
  return {
    url: env === 'development' ? `${host}:${port}${call}` : `${host}${call}`,
    method: 'post',
    createXHR: () => new XMLHttpRequest(),
    crossDomain: true,
    withCredentials: false,
    body: JSON.stringify({
      method,
      path: endpoint,
      Authorization: token || auth.getToken(),
      payloads,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
}

export default function api(data) {
  const settings = parse(data)

  return ajax(settings)
}
