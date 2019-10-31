import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import anasayfa from './Anasayfa.vue'
import Giris from './Giris.vue'
import Uyelik from './Uyelik.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: anasayfa },
  { path: '/Giris', component: Giris },
  { path: '/Uyelik', component: Uyelik }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

