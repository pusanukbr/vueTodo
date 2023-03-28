import Vue from 'vue'

import App from './App.vue'
import router from './router'

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faToggleOn, faToggleOff, faStar } from '@fortawesome/free-solid-svg-icons'

import './assets/main.css'


/* add icons to the library */
library.add(faUserSecret, faToggleOn, faToggleOff, faStar)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
