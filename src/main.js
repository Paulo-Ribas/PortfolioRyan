import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueScreen from 'vue-screen'
import { createHead, VueHeadMixin } from '@unhead/vue'
const head = createHead()

const app = createApp(App)


app.use(router)
app.use(vueScreen,{
    sm: 500,
    md: 870,
    lg: 1250,
    xl: Infinity,
  })
  app.use(head)
  app.mixin(VueHeadMixin)
app.mount('#app')
