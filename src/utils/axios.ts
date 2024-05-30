import axios from 'axios'

// 设置http get请求不缓存
axios.defaults.headers.get['Cache-Control'] = 'no-cache'
axios.defaults.headers.get.Pragma = 'no-cache'

const DEFAULT_CONFIG = {
  baseURL: '/api/',
  timeout: 15 * 1000,
  withCredentials: true,
}

const instance = axios.create(DEFAULT_CONFIG)

export default instance
