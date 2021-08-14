import request from '../utils/request'

// 删除
export function deleteImg(data) {
  return request({
    url: '/upload/deleteImg',
    method: 'delete',
    data
  })
}

// 获取图片
export function fetchImg(data) {
  return request({
    url: '/upload/fetchImg',
    method: 'post',
    responseType: 'blob',
    data
  })
}
