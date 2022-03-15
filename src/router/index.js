import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import AboutUs  from '../views/AboutUs.vue'
import Process  from '../views/Process.vue'
import Techno  from '../views/Techno.vue'
import ClientReview  from '../views/ClientReview.vue'
import Portfolio  from '../views/Portfolio.vue'
import Blog  from '../views/Blog.vue'


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
  },
  {
    path : '/client-review',
    name : 'ClientReview', 
    component : ClientReview
  },
  {
    path : '/portfolio',
    name : 'Portfolio', 
    component : Portfolio
  },
  {
    path : '/blog',
    name : 'Blog', 
    component : Blog
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router