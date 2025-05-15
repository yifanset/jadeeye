import { createRouter, createWebHashHistory } from 'vue-router';  // Изменили createWebHistory на createWebHashHistory
import SearchBlock from '@/components/views/SearchBlock.vue';
const ProductList = () => import('@/components/views/ProductList.vue');
const StatisticBlock = () => import('@/components/views/StatisticBlock.vue');

const routes = [
  {
    path: '/',
    name: 'SearchBlock',
    component: SearchBlock,
  },
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/statistics',
    name: 'StatisticBlock',
    component: StatisticBlock,
  },
];

const router = createRouter({
  history: createWebHashHistory(),  // Используем hash-режим
  routes,
});

export default router;