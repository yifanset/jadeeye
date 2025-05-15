import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Profile from '@/views/Profile.vue';
import Registration from '@/views/Registration.vue';
import Entrance from '@/views/Entrance.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
  },
  {
    path: '/entrance',
    name: 'Entrance',
    component: Entrance,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;