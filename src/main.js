import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/axios';
import './plugins/bootstrap-vue';
import VueToastr from '@deveodk/vue-toastr';
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Overdrive from 'vue-overdrive';
import './assets/scss/custom.scss';
import util from '@/util';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueToastr);
Vue.use(Overdrive);
Vue.filter('capitalize', (value) => util.capitalize(value));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
