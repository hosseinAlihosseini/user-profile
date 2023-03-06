import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from './../layouts/MainLayout.vue'
import Home from './../pages/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/edit',
      name: 'edit',
      component: Home,
      meta: {
        layout: MainLayout,
      },
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = 'پروفایل من';
  next();
});

export default router
