import { getAuthCookie } from '@/utils/cookie'
import { includes, split } from 'lodash'

function isAuthenticated() {
  const authc = getAuthCookie()
  return authc !== undefined && authc.length !== 0 && split(authc, '_').length === 2
}

function isPermissionNeeded(to) {
  return permissionNeeded.filter(item => {
    return includes(to, item)
  }).length > 0 && notPermissionNeeded.filter(item => {
    return includes(to, item)
  }).length <= 0
}

// const authFailedRoute = '/admin/authn'

const permissionNeeded = [
  `/admin`
]
const notPermissionNeeded = [
  '/admin/login'
]

export const checkPerm = function (to, from, next) {
  if (isPermissionNeeded(to.path)) {
    if (isAuthenticated()) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
}
