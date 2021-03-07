import { createApp } from 'vue'
import App from '/@/App'
import router from '/@/router'
import { store, key } from '/@/store'
import '/@/style/main.scss'

const app = createApp(App)

app.use(router)

// pass the injection key
app.use(store, key)

app.mount('#app')
