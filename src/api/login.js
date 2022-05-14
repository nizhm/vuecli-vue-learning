import request from '../utils/request'

// 登录第三方
export function login (data) {
  return request({
    url: '/chinaLife/login',
    method: 'post',
    data
  })
}
