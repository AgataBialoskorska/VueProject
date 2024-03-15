import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '../views/View-Home.vue'
import ViewMore from '../views/View-More.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ViewHome,
            meta: { title: 'Portfolio' }
        },
        {
            path: '/more',
            name: 'more',
            component: ViewMore,
            meta: { title: 'More' }
        },
        {
            path: '/hangman',
            name: 'Hangman',
            component: () => import('../components/GameHangman.vue'),
            meta: { title: 'Game Hangman' }
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
})
router.beforeEach((to, from, next) => {
    const defaultTitle = 'Agata Białoskórska'
    if (to.meta.title) {
        document.title = defaultTitle + ' - ' + to.meta.title
    } else {
        document.title = defaultTitle
    }
    next()
})

export default router
