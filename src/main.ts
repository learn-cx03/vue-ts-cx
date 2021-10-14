import { createApp } from 'vue'
import { globalRegister } from './global'
import './service/axios_demo'
import cxRequest from './service'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import store from './store'

const app = createApp(App)

app.use(globalRegister)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

// cxRequest.get()
cxRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
