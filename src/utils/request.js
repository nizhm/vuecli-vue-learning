import axios from 'axios';
import { Message } from 'element-ui';

// 创建axios实例
const service = axios.create({
  baseURL: '/',
  timeout: 5000
})
// request拦截器+

service.interceptors.request.use(
  config => {
    if(config.method === 'get' && config.params) {
      config.params.t = Date.now()
    }
    config.headers['Authorization'] = '123456'
    config.headers['Content-type'] = 'application/json'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    const { code } = response.data
    if(code < 200 || code > 300) {
      const { msg } = response.data
      Message({
        message: msg || '请求出错',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    }else {
      const { data } = response
      return data
    }
  },
  error => {
    console.log(error.response)
    let code = undefined
    try {
      code = error.response.status
    } catch (e) {
      Message({
        message: error || '请求出错',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    }
    if(!code) {
      Message({
        message: '接口请求失败',
        type: 'error',
        duration: 5 * 1000
      })
    }else {
      if(code === 401) {
        Message({
          message: '登录过期',
          type: 'error',
          duration: 5 * 1000
        })
      }else {
        Message({
          message: error.response.data.msg || error.statusText || '请求出错',
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject('error')
    }
  }
)

export default service
