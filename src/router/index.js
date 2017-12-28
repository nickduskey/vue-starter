import Vue from 'vue';
import Router from 'vue-router';
import ChatWindow from '@/components/ChatWindow.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatWindow',
      component: ChatWindow,
    },
  ],
});
