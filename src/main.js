import Vue from 'vue'
import App from './App.vue'
import router from './router';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// import { faTwitter, faApple, faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons'
// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// /* add icons to the library */
// // library.add(faUserSecret, faTwitter, faApple, faFacebook, faGoogle)
// library.add(fas, fab)

// /* add font awesome icon component */
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
