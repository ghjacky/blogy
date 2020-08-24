import request from '@/utils/request'
import settings from '@/settings'

export function addPost(post) {
  return request()({
    url: `${settings.apiPrefix}/posts`,
    method: 'post',
    data: post
  })
}

export function deletePost(id) {
  return request()({
    url: `${settings.apiPrefix}/posts/${id}`,
    method: 'delete'
  })
}

export function updatePost(post) {
  return request()({
    url: `${settings.apiPrefix}/posts`,
    method: 'put',
    data: post
  })
}

export function getPost(id) {
  return request()({
    url: `${settings.apiPrefix}/posts/${id}`,
    method: 'get'
  })
}

export function fetchPosts() {
  return request()({
    url: `${settings.apiPrefix}/posts`,
    method: 'get'
  })
}
