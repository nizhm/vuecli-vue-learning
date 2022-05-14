import request from '../utils/request'

// 登录第三方
export function login (data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}
