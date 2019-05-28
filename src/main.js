import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';
import App from './App.vue'
import { MdApp, MdToolbar, MdMenu, MdButton, MdContent, MdTabs, MdIcon, MdList, MdCard, MdDrawer } from '../node_modules/vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
//import 'vue-material/dist/theme/default-dark.css' // This line here

import AddPet from './components/AddPet.vue'
import EditPet from './components/EditPet.vue'
import ListPet from './components/ListPet.vue'
import Home from './components/Home.vue'

import '../node_modules/nprogress/nprogress.css'

Vue.use(MdApp)
Vue.use(MdToolbar)
Vue.use(MdMenu)
Vue.use(MdList)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdIcon)
Vue.use(MdCard)
Vue.use(MdDrawer)
Vue.use(firestorePlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
        name: 'Add',
        path: '/add',
        component: AddPet
  },
  {
      name: 'Edit',
      path: '/edit/:id',
      component: EditPet
  },
  {
      name: 'List',
      path: '/index',
      component: ListPet
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
