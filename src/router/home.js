export const HomeRouter = {
  path: '/',
  name: '/',
  redirect: '/blog',
  component: () => import('@/views/Home'),
  meta: { title: '主页' },
  children: [
    {
      path: 'home',
      name: '/home',
      component: () => import('@/views/Home'),
      meta: { title: '主页' }
    },
    {
      path: 'login',
      name: '/login',
      component: () => import('@/views/admin/login')
    },
    {
      path: 'logout',
      name: '/logout',
      component: () => import('@/views/admin/logout')
    }
  ]
}
