import Cookies from 'js-cookie'

const authc = 'authc'

export function getAuthCookie() {
  return Cookies.get(authc)
}

export function deleteAuthCookie() {
  return Cookies.remove(authc)
}
