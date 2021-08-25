import { createStore } from 'vuex'
import { authModule } from './authModule/'
import { postModule } from './postModule'

export default createStore({
  strict:true,
  modules:{
    auth:authModule,
    post:postModule
  }
})
