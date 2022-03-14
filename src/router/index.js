import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import AboutUs  from '../views/AboutUs.vue'
import Process  from '../views/Process.vue'
import Techno  from '../views/Techno.vue'

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name : 'Home', 
    component : Home
  },
  {
    path : '/contact',
    name : 'Contact', 
    component : Contact
  },
  {
    path : '/about-us',
    name : 'AboutUs', 
    component : AboutUs
  },
  {
   path : '/process',
    name : 'Process', 
    component : Process
  },
  {
   path : '/technologies',
    name : 'Technologies', 
    component : Techno
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router