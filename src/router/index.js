import ViewHome from '../views/View-Home.vue'
import ViewMore from '../views/View-More.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
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
            name: 'home',
            component: ViewHome
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

    const defaultUrl = '/'
    if (to.path === '/' || to.path === '/more' || to.path === '/hangman') {
        next()
    } else {
        next(defaultUrl)
    }
    next()
})

export default router
