// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import Navigation from '@/components/Navigation';

import App from './App';
import router from './router';


Vue.config.productionTip = false;

Vue.component('navigation', Navigation);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
