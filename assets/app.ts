require('./styles/app.scss');
import {createApp} from 'vue';

import App from './App.vue'


// import './utilities/font-awesome'
//
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//
//
// import router from './router'
// import {ClientHttp} from './utils/client.ts';
// Vue.prototypes.http = new ClientHttp()
//
// declare global {
//     interface Window {
//         http: ClientHttp;
//     }
// }

createApp(App)
  // .use(router)
  // .component('fa-icon', FontAwesomeIcon)
  .mount('#app')
