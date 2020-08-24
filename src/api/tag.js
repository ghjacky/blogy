import request from '@/utils/request'
import settings from '@/settings'

export function getTag(tag) {
  return request()({
    url: `${settings.apiPrefix}/tags/${tag}`,
    method: 'get'
  })
}

export function fetchTags() {
  return request()({
    url: `${settings.apiPrefix}/tags`,
    method: 'get'
  })
}
