import axios from '@/utils/axiosPlugin'
// import ezr from '@/util/ezr'
// import router from '@/router'
let AUTH_USERNAME_LOCAL_KEY = 'auth'
let AUTH_USERINFO_LOCAL_KEY = 'user'
let AUTH_MENUINFO_LOCAL_KEY = 'menu'
const state = {
  auth: ''
}

const getters = {
  currentAuth: state => state.auth

}

const mutations = {
    setUserName(state, info) {
        state.auth = info.Name;
        ezr.setItems(AUTH_USERNAME_LOCAL_KEY, info.Name)
    },
    setUserInfo(state, info) {
      state.user = info;
      ezr.setItems(AUTH_USERINFO_LOCAL_KEY, info)
    },
    setMenuList(state, info) {
      state.menuList = info;
      ezr.setItems(AUTH_MENUINFO_LOCAL_KEY, info)
    },
    removeUserInfo(state){
        state.auth = '';
        state.user = '';
        ezr.removeItems(AUTH_USERNAME_LOCAL_KEY)
        ezr.removeItems(AUTH_USERINFO_LOCAL_KEY)
        router.push({
          path: '/login'
        })
    }
}

const actions = {
  login({commit},{UserName, Pass}){
    return axios.post('/api/BaseUser/Login', {
      UserName,
      Pass
    })
    .then(res => {
      if(res) {
        // commit({
        //   type: 'setUserName',
        //   ...res
        // })
        commit('setUserName', res);
        return res;
      }
    })
  },
  getUserInfo({commit}){
    return axios.get('/api/BaseUser/GetUserInfo')
    .then(res => {
      if(res) {
        commit({
          type: 'setUserInfo',
          ...res
        })
        return res;
      }
    })
  },
  getMenuList({commit}){
    return axios.get('/api/BaseSys/GetAllMenus')
    .then(res => {
      if(res) {
        commit('setMenuList', res);

      }
      return res;
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
