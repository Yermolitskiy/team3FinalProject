import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import sharedComponents from './components/'
import sharedUIComponents from './components/UI'

const app = createApp(App)

sharedComponents.forEach(component => app.component(component.name , component))
sharedUIComponents.forEach(component => app.component(component.name , component))

app.use(store).use(router).mount('#app')
