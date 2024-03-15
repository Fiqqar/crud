// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// Vue.config.productionTip = false

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')

// createApp(App).use(router).mount('#app')