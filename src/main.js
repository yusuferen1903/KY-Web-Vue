import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import anasayfa from './Anasayfa.vue'
import Giris from './Giris.vue'
import Uyelik from './Uyelik.vue'
import Favoriurunlerimiz from './Favori-urunlerimiz.vue'
import izgaraetler from './izgaraetler.vue'
import KahvaltiveYan from './KahvaltiveYan.vue'
import Doner from './Doner.vue'
import CigUrunler from './CigUrunler.vue'
import Kofte from './Kofte'
import VueCarousel from '@chenfengyuan/vue-carousel';
import BootstrapVue from 'bootstrap-vue'
/* import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' */

Vue.use(BootstrapVue)

Vue.component(VueCarousel.name, VueCarousel);


Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: anasayfa },
  { path: '/Giris', component: Giris },
  { path: '/Uyelik', component: Uyelik },
  { path: '/Favori-urunlerimiz', component: Favoriurunlerimiz },
  { path: '/izgara-etler', component: izgaraetler },
  { path: '/KahvaltiveYan', component: KahvaltiveYan },
  { path: '/Doner', component: Doner },
  { path: '/CigUrunler', component: CigUrunler },
  { path: '/Kofte', component: Kofte }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

