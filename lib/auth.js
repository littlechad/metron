import Cookies from 'js-cookie'

export const isAuthenticated = () => (!!Cookies.get('token'))

export const getServerToken = (req) => {
  const { token = '' } = req.cookies

  return token
}

export const getToken = (name = 'token') => {
  let token = ''
  if (Cookies.get(name)) {
    token = Cookies.get(name)
  }
  return token
}

export const setToken = (token) => {
  try {
    Cookies.set('token', token)
    return true
  } catch (err) {
    return false
  }
}

export const removeToken = () => {
  try {
    Cookies.remove('token')
    return true
  } catch (err) {
    return false
  }
}
