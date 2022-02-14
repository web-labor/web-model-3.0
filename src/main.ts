import store from '@/store'
import router from '@/router/index'
import App from './App.vue'
import '@/assets/styles/index.scss'
import '@/assets/iconfont.css'
// import 'virtual:windi.css'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
