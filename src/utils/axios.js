import axios from 'axios'

// 全局配置
axios.defaults.baseURL = 'http://www.kbftech.cn/city/api';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export default axios