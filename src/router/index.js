import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '../views/View-Home.vue'
import ViewMore from '../views/View-More.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ViewHome
        },
        {
            path: '/more',
            name: 'more',
            component: ViewMore
        },
        {
            path: '/hangman',
            name: 'Hangman',
            component: () => import('../components/GameHangman.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
})

export default router
