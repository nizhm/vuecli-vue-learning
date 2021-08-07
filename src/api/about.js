import request from '../utils/request'
// 查询
export function getList(params) {
  return request({
    url: '/users/getList',
    method: 'get',
    params
  })
}
// 新增
export function addUser(data) {
  return request({
    url: '/users/addUser',
    method: 'post',
    data
  })
}
// 修改
export function modifyUser(data) {
  return request({
    url: '/users/modifyUser',
    method: 'put',
    data
  })
}
// 删除
export function deleteUser(data) {
  return request({
    url: '/users/deleteUser',
    method: 'delete',
    data
  })
}
