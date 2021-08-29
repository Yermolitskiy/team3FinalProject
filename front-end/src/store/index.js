import { createStore } from 'vuex'
import { authModule } from './authModule/'
import { postModule } from './postModule'

export default createStore({
  strict:true,
  state:{
    isNavOpen:false
  },
  mutations:{
    toggleNavbar(state){
      state.isNavOpen = !state.isNavOpen
    },
    hideNavbar(state){
      state.isNavOpen = false
    }
  },
  modules:{
    auth:authModule,
    post:postModule
  }
})
