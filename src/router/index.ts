import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/home.vue';

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: Home,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '首页',
        },
        component: () => import('../views/index.vue'),
      },

      {
        path: '/introduce',
        name: 'introduce',
        meta: {
          title: '公司介绍',
        },
        component: () => import('../views/introduce.vue'),
      },



    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '没有权限',
    },
    component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
