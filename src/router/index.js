import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CryptoView from '../views/CryptoView.vue';
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/CryptoView',
    name: 'CryptoView',
    component: CryptoView,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
