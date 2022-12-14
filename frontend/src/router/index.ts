import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WeatherView from '../views/WeatherView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/weather/:id',
    props: true,
    name: 'weather',
    component: WeatherView,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: () => {
      return { path: '/' };
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
