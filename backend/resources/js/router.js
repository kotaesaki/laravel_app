import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ExampleComponent from './components/ExampleComponent'

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ExampleComponent,
      
    }
  ]
})

export default router