import Cookies from 'js-cookie'

const authc = 'ss_id'

export function getAuthCookie() {
  return Cookies.get(authc)
}

export function deleteAuthCookie() {
  return Cookies.remove(authc)
}
