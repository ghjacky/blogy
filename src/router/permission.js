import { getAuthCookie } from '@/utils/cookie'
import _ from 'lodash'

function isAuthenticated() {
  const authc = getAuthCookie()
  return authc !== undefined && authc.length !== 0

}

function isPermissionNeeded(to) {
  return notPermissionNeeded.indexOf(to.path) < 0 && _.includes(to.path,'/admin')
}

const authFailedRoute = '/admin/authn'

const notPermissionNeeded = [
  '/404',
  '/admin/login'
]

export const checkPerm = function (to, from, next) {
  if (isPermissionNeeded(to)) {
    if (isAuthenticated()) {
      next()
    } else {
      next(authFailedRoute)
    }
  } else {
    next()
  }
}
