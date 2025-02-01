import { createWebHashHistory, createRouter } from 'vue-router'

import Contact from '@/pages/Contact.vue'
import Home from '@/pages/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
