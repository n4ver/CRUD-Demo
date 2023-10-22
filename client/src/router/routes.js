export default [
  {
    name: 'Index',
    path: '/',
    meta: { requireAuth: false },
    component: () => import('../views/Index.vue')
  },
  {
    name: 'Login',
    path: '/login',
    meta: { requireAuth: false },
    component: () => import('../views/Login.vue')
  },
  {
    name: 'Complaints',
    path: '/complaints',
    meta: { requireAuth: false },
    component: () => import('../views/Complaints.vue')
  },
  {
    name: 'Register',
    path: '/register',
    meta: { requireAuth: false },
    component: () => import('../views/Register.vue')
  },
  {
    name: 'Error',
    path: '/:catchAll(.*)',
    component: () => import('../views/PageNotFound.vue'),
  }
]
