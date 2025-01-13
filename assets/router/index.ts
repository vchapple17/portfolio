import {createRouter, createWebHistory} from 'vue-router';
import aboutRoutes from './about'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',
        name: 'home',
        component: () => import('@assets/pages/home/HomePage.vue'),
        meta: {
          title: 'Home',
          roles: ['ROLE_DEV'],
        }
      },
        ...aboutRoutes,
    ],
});



router.beforeEach((to) => {
})

const DEFAULT_TITLE = "Valerie Chapple"
router.beforeEach((to, from, next) => {
  let meta = to.meta

  let title = "Valerie Chapple | Software Developer | Kansas City"
  if (meta.title) {
    title = `${meta.title} | ${title}`
  }
  document.title = title
  next()
});

export default router;
