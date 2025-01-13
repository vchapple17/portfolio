export default
  [
    {
      path: '/about',
      name: 'about',
      component: () => import('@assets/pages/about/AboutPage.vue'),
      meta: {
        title: 'About Me',
        roles: ['ROLE_DEV'],
      }
    }
  ]
