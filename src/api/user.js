import request from '@/utils/request'
import settings from '@/settings'

export function addUser(user) {
  return request()({
    url: `${settings.apiPrefix}/users`,
    method: 'post',
    data: user
  })
}

export function getUser(username) {
  return request()({
    url: `${settings.apiPrefix}/users/${username}`,
    method: 'get'
  })
}

export function auth(user) {
  return request()({
    url: `${settings.apiPrefix}/users/auth`,
    method: 'post',
    data: user
  })
}
export function logout(user) {
  return request()({
    url: `${settings.apiPrefix}/users/auth/logout`,
    method: 'post',
    data: user
  })
}
