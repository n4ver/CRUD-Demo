export default [
  {
    name: 'Login',
    path: '/login',
    meta: { requireAuth: false },
    component: () => import('../views/Login.vue')
  },
  {
    name: 'Register',
    path: '/register',
    meta: { requireAuth: false },
    component: () => import('../views/Register.vue')
  },
  {
    name: ''
  }
]
