import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Gif from './Gif.vue'
import anasayfa from './Anasayfa.vue'
import Giris from './Giris.vue'
import Uyelik from './Uyelik.vue'
import Favoriurunlerimiz from './Favori-urunlerimiz.vue'
import izgaraetler from './izgaraetler.vue'
import KahvaltiveYan from './KahvaltiveYan.vue'
import Doner from './Doner.vue'
import CigUrunler from './CigUrunler.vue'
import Kofte from './Kofte'
import KofteCig from './KofteCig'
import deneme from './deneme'
import Sepetim from './Sepetim'
import SSS from './SSS'
import Kurumsal from './Kurumsal'
import Hakkimizda from './Hakkimizda'
import VueCarousel from '@chenfengyuan/vue-carousel';
import { BadgerAccordion, BadgerAccordionItem } from 'vue-badger-accordion'
import VueClazyLoad from 'vue-clazy-load'
import "vue-loading-overlay/dist/vue-loading.css";




/* import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' */

Vue.component('BadgerAccordion', BadgerAccordion)
Vue.component('BadgerAccordionItem', BadgerAccordionItem)

Vue.component(VueCarousel.name, VueCarousel);
Vue.use(VueClazyLoad)



Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Gif },
  { path: '/Anasayfa', component: anasayfa },
  { path: '/Giris', component: Giris },
  { path: '/Uyelik', component: Uyelik },
  { path: '/Favori-urunlerimiz', component: Favoriurunlerimiz },
  { path: '/izgara-etler', component: izgaraetler },
  { path: '/KahvaltiveYan', component: KahvaltiveYan },
  { path: '/Doner', component: Doner },
  { path: '/CigUrunler', component: CigUrunler },
  { path: '/Kofte', component: Kofte },
  { path: '/KofteCig', component: KofteCig },
  { path: '/deneme', component: deneme },
  { path: '/Sepetim', component: Sepetim },
  { path: '/SSS', component: SSS },
  { path: '/Kurumsal', component: Kurumsal },
  { path: '/Hakkimizda', component: Hakkimizda },
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

export default {
  components: {
    BadgerAccordion,
    BadgerAccordionItem
  }
}

