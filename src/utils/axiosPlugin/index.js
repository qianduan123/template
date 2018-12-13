import axios from 'axios'
import { Message } from 'element-ui'
import { baseUrl } from '../../config'
// import ezr from '@/util/ezr'
const Axios = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
  responseType: "json",
  withCredentials: true // 是否允许带cookie这些
})


Axios.interceptors.response.use(data => {
  if (data.data.StatusCode != '200') {
    Message.warning(data.data.Msg)
  }
  return data.data
}, err => {
  
  if (err.response && !err.response.status) {
    Message.error({
      message: err
    })
  }
  if (err.response.status == 504 || err.response.status == 404) {
    Message.error({message: '服务器丢失了⊙﹏⊙'});
  } else if (err.response.status == 403) {
    Message.error({message: '权限不足,请联系管理员!'});
  } else {
    if (err.response.data.ErrorMsg) {
      Message.error({
        message: err.response.data.ErrorMsg
      });
    }else{
      Message.error({message: '网络繁忙, 请联系管理员!'});
    }
  }
  return Promise.reject(err);
})

export default Axios;