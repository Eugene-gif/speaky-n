import { createRouter, createWebHistory } from "vue-router";

import Main from "@/pages/Main/Main.vue";
import Shop from "@/pages/Shop/Shop.vue";

const url = '/speaky-n'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/shop',
    component: Shop
  },
]

const router = createRouter({
  routes,
  history: createWebHistory('/speaky-n')
})

export default router;