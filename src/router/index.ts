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
        path: 'introduce',
        name: 'introduce',
        meta: {
          title: '公司介绍',
        },
        component: () => import('../views/introduce.vue'),
      },
      {
        path: 'solution',
        name: 'solution',
        meta: {
          title: '解决方案',
        },
        component: () => import('../views/solution.vue'),
        // children: [
        //   {
        //     path: 'smartCommunity',
        //     name: 'smartCommunity',
        //     meta: {
        //       title: '智慧小区',
        //     },
        //     component: () => import('../views/smartCommunity.vue'),
        //   }, {
        //     path: 'smartBuild',
        //     name: 'smartBuild',
        //     meta: {
        //       title: '智慧建筑',
        //     },
        //     component: () => import('../views/smartBuild.vue'),
        //   },
        //   {
        //     path: 'smartCampus',
        //     name: 'smartCampus',
        //     meta: {
        //       title: '智慧园区',
        //     },
        //     component: () => import('../views/smartCampus.vue'),
        //   },
        //   {
        //     path: 'smarteHospital',
        //     name: 'smarteHospital',
        //     meta: {
        //       title: '智慧医疗',
        //     },
        //     component: () => import('../views/smarteHospital.vue'),
        //   },
        //   {
        //     path: 'smartSchool',
        //     name: 'smartSchool',
        //     meta: {
        //       title: '智慧校园',
        //     },
        //     component: () => import('../views/smartSchool.vue'),
        //   },
        //   {
        //     path: 'smartTravel',
        //     name: 'smartTravel',
        //     meta: {
        //       title: '智慧旅游',
        //     },
        //     component: () => import('../views/smartTravel.vue'),
        //   },


        // ]
      },
      {
        path: '/example',
        name: 'example',
        meta: {
          title: '成功案例',
        },
        component: () => import('../views/example.vue'),
        children: [
          {
            path: 'smartCommunity',
            name: 'smartCommunity',
            meta: {
              title: '智慧小区',
            },
            component: () => import('../views/smartCommunity.vue'),
          }, {
            path: 'smartBuild',
            name: 'smartBuild',
            meta: {
              title: '智慧建筑',
            },
            component: () => import('../views/smartBuild.vue'),
          },
          {
            path: 'smartCampus',
            name: 'smartCampus',
            meta: {
              title: '智慧园区',
            },
            component: () => import('../views/smartCampus.vue'),
          },
          {
            path: 'smarteHospital',
            name: 'smarteHospital',
            meta: {
              title: '智慧医疗',
            },
            component: () => import('../views/smarteHospital.vue'),
          },
          {
            path: 'smartSchool',
            name: 'smartSchool',
            meta: {
              title: '智慧校园',
            },
            component: () => import('../views/smartSchool.vue'),
          },
          {
            path: 'smartTravel',
            name: 'smartTravel',
            meta: {
              title: '智慧旅游',
            },
            component: () => import('../views/smartTravel.vue'),
          },


        ]
      },
      {
        path: '/relation',
        name: 'relation',
        meta: {
          title: '联系我们',
        },
        component: () => import('../views/relation.vue'),
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
