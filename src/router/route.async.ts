// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router'

const asyncRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        meta: {
            title: '主页',
            icon: 'chicken',
            menu: false
        },
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '首页',
            icon: 'icon-daifukuan',
            menu: true
        },
        children: [
            {
                path: '/test',
                meta: {
                    title: 'test',
                    icon: 'icon-daifukuan',
                    menu: true
                },
                component: () => import('@/views/iconcom/index.vue')
            }
        ],
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/icon',
        name: 'icon',
        meta: {
            title: 'icon示例',
            icon: '',
            menu: true
        },
        component: () => import('@/views/iconcom/index.vue')
    },
    {
        path: '/windi',
        name: 'windi',
        meta: {
            title: 'Windi CSS示例',
            icon: '',
            menu: true
        },
        component: () => import('@/views/windi/index.vue')
    }
]

export default asyncRoutes
