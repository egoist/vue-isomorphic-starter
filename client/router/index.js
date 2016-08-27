import Vue from 'vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Counter from '../components/Counter.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/counter', component: Counter},
    {path: '/about', component: About}
  ]
})
