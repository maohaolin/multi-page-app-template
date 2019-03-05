import Cookies from 'js-cookie'

const TokenKey = 'Admin-id'
const NameKey = 'Admin-name'

export function getToken() {
  const token = Cookies.get(TokenKey)
  if (!token || token === 'undefined' || token === 'null') return ''
  else return token
}

export function getUserName() {
  const name = Cookies.get(NameKey)
  if (!name || name === 'undefined' || name === 'null') return ''
  else return name
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setUserName(name) {
  return Cookies.set(NameKey, name)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
