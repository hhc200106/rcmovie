import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home/actor-list'
    },
    {
        path: '/home',
        name: 'name',
        component: () => import('../views/HomeView.vue'),
        children: [{
            path: 'actor-list',
            name: 'actor-list',
            component: () => import('../views/actor/ActorList.vue')
        }, {
            path: 'director-list',
            name: 'director-list',
            component: () => import('../views/director/DirectorList.vue')
        }, {
            path: 'movie-list',
            name: 'movie-list',
            component: () => import('../views/movie/MovieList.vue')
        }]
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
