import { createApp } from 'vue'
import App from './App.vue'
import "/tailwind.css"
import router from "./router"
import store from "./store/index"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(faCoffee)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = createApp(App)
app.use(router,FontAwesomeIcon,library,faCoffee);
app.use(store);
app.mount('#app');
