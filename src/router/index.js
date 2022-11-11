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
            path: 'actor-add',
            name: 'actor-add',
            component: () => import('../views/actor/ActorAdd.vue')
        }, {
            path: 'director-list',
            name: 'director-list',
            component: () => import('../views/director/DirectorList.vue')
        }, {
            path: 'director-add',
            name: 'director-add',
            component: () => import('../views/director/DirectorAdd.vue')
        }, {
            path: 'movie-list',
            name: 'movie-list',
            component: () => import('../views/movie/MovieList.vue')
        }, {
            path: 'movie-add',
            name: 'movie-add',
            component: () => import('../views/movie/MovieAdd.vue')
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
