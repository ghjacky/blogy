import request from '@/utils/request'
import settings from '@/settings'

export function addCategory(category) {
  return request()({
    url: `${settings.apiPrefix}/categories`,
    method: 'post',
    data: category
  })
}

export function fetchCategories(tree) {
  return request()({
    url: `${settings.apiPrefix}/categories?tree=${tree}`,
    method: 'get'
  })
}

export function updateCategory(category) {
  return request()({
    url: `${settings.apiPrefix}/categories`,
    method: 'put',
    data: category
  })
}
export function getCategory(id) {
  return request()({
    url: `${settings.apiPrefix}/categories/${id}`,
    method: 'get'
  })
}
export function deleteCategory(id) {
  return request()({
    url: `${settings.apiPrefix}/categories/${id}`,
    method: 'delete'
  })
}
