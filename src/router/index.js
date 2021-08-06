import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: '',
      },
    },
    {
      path: '/see-cv',
      name: 'see-cv',
      component: () => import('@/views/SeeCv.vue'),
      meta: {
        pageTitle: 'See CV',
        breadcrumb: [
          {
            text: 'Папки',
            active: true,
          },
        ],
      },
    },
    {
      path: '/see-cv-users',
      name: 'see-cv-users',
      component: () => import('@/views/ComplaintUsers.vue'),
      meta: {
        pageTitle: 'See CV',
        breadcrumb: [
          {
            text: 'Папки',
            active: true,
          },
        ],
      },
    },
    {
      path: '/see-cv-bill',
      name: 'see-cv-bill',
      component: () => import('@/views/Bill.vue'),
      meta: {
        pageTitle: 'See CV',
        breadcrumb: [
          {
            text: 'Счёт',
            active: true,
          },
        ],
      },
    },
    {
      path: '/candidate-user',
      name: 'candidate-user',
      component: () => import('@/views/CandidateUsers.vue'),
      meta: {
        pageTitle: 'See CV',
        breadcrumb: [
          {
            text: 'Кандидаты',
            active: true,
          },
        ],
      },
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/views/Faq.vue'),
      meta: {
        pageTitle: 'FAQ',
        breadcrumb: [
          {
            active: false,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/registration/Register.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
