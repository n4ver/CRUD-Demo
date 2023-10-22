// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import App from './App'
import router from './router'
import './assets/css/style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

export default {}