import { createWebHashHistory, createRouter } from 'vue-router'

import Contact from '@renderer/pages/Contact.vue'
import Home from '@renderer/pages/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
