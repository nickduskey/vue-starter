import 'babel-polyfill';
import Vue from 'vue';
import App from './components/App.vue';
import store from './store';
import router from './router';
import { getAllMessages } from './store/actions';

Vue.config.productionTip = false;
Vue.config.debug = true;

Vue.filter('time', timestamp =>
  new Date(timestamp).toLocaleTimeString());

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});

getAllMessages(store);
