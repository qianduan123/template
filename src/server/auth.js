import Login from './account/login'

export default class Auth {
  static isLogin() {
    const user = Login.getUserInfo()
    return user && Object.keys(user).length
  }

  static isSelectShop() {
    const shop = Login.getShopInfo()
    return shop && Object.keys(shop).length
  }
}
