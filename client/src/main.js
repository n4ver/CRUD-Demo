// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from '@/store/store'
import router from './router'
import './assets/css/style.css'

const app = createApp(App)
app.use(router)
app.use(Vuex)
app.use(store)
app.mount('#app')

export default {}