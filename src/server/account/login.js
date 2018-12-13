
import router from '@/router'
import axios from '@/utils/axiosPlugin'
import crypto from 'crypto'

export default class Login extends axios {
  constructor(data) {
    super()
  }

  // md5加密
  static md5Sign(data) {
    const str = Buffer.from(data).toString('binary')
    const md5 = crypto.createHash('md5').update(str).digest('hex')
    return md5
  }

  // 登录
  static async doLogin({
    userCode,
    userPwd
  }) {
    let { Result } = await this.post(`/account/login`, {
      userCode,
      userPwd: this.md5Sign(userPwd)
    })
    if (Result && Object.keys(Result).length) {
      localStorage.user = JSON.stringify(Result)
      router.push({
        path: '/home'
      })
    }
    return Result;
  }
  
  // 登出
  static logout() {
    localStorage.removeItem('user')
    router.push({
      path: '/login'
    })
  }

  static getUserInfo() {
    return localStorage.user ? JSON.parse(localStorage.user) : null
  }

}
