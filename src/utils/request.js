import axios from 'axios'
import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth'
// import { apiPrefix } from '@/settings'

// create an axios instance
const service = function() {
  const request = axios.create({
    // baseURL: apiPrefix+path, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
  })
  // request interceptor
  request.interceptors.request.use(
    config => {
      // do something before request is sent

      // if (store.getters.token) {
      //   // let each request carry token
      //   // ['X-Token'] is a custom headers key
      //   // please modify it according to the actual situation
      //   // config.headers['X-Token'] = getToken()
      // }
      return config
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )

  // response interceptor
  request.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom Code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      const res = response
      // if the custom Code is not 100000, it is judged as an error.
      if (res.status !== 200) {
        Message({
          message: res.data.message || 'Error',
          type: 'error',
          showClose: true,
          duration: 1000
        })
        return Promise.reject(new Error(res.data.message || 'Error'))
      } else {
        return res
      }
    },
    error => {
      Message({
        message: error.message,
        type: 'error',
        duration: 10 * 1000
      })
      return Promise.reject(error)
    }
  )

  return request
}

export default service
