import request from '@/utils/request'
import settings from '@/settings'

export function getTag(tag) {
  return request()({
    url: `${settings.apiPrefix}/tags/${tag}`,
    method: 'get'
  })
}
