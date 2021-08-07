import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '/',
  timeout: 5000
})
// request拦截器+

service.interceptors.request.use(
  config => {
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
      console.error(msg || '请求出错')
      return Promise.reject('error')
    }else {
      const { headers, data } = response
      console.info(headers)
      return data
    }
  },
  error => {
    let code = undefined
    try {
      code = error.response.data.status
    } catch (e) {
      console.error(error)
      return Promise.reject('error')
    }
    if(!code) {
      console.error('接口请求失败')
    }else {
      if(code === 401) {
        console.error('登录过期')
      }else {
        console.error(error)
      }
      return Promise.reject('error')
    }
  }
)

export default service
