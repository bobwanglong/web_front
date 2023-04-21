// 封装axios
// 实例化  请求拦截器 响应拦截器

import axios from 'axios'
const http = axios.create({
  // baseURL: 'http://192.168.118.82:2381/apis/v1/objects/apigateway'
  // baseURL: 'http://192.168.118.82:2381/apis/v1/objects/',
  timeout: 5000

})

export { http }

