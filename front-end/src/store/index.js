import { createStore } from 'vuex'
import { authModule } from './authModule'

export default createStore({
  nodules:{
    auth:authModule
  }
})
