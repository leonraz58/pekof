import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import FavouritesPage from '@/components/FavouritesPage.vue'
import ProductPage from '@/components/ProductPage.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/favourites',
      component: FavouritesPage,
    },
    {
      path: '/product/:id',
      component: ProductPage,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})

export default router
