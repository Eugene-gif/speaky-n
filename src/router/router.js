import { createRouter, createWebHistory } from "vue-router";

import Main from "@/pages/Main/Main.vue";
import Shop from "@/pages/Shop/Shop.vue";
import ShopItem from "@/pages/ShopItem/ShopItem.vue";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/shop',
    component: Shop,
  },
  {
    name: 'ShopItem',
    path: '/shop/:id',
    component: ShopItem,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory('/speaky-n')
})

export default router;