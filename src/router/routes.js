const routes = [
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'dashboard',component: () => import('pages/Index.vue') },
      { path: 'input', name: 'input',component: () => import('pages/input.vue') },
      { path: 'keluar', name: 'keluar',component: () => import('pages/keluar.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
