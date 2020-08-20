export const AdminRouter = {
  path: '/admin',
  name: '/admin',
  component: () => import('@/views/admin/login'),
  children: [
    {
      path: 'login',
      name: '/admin/login',
      component: () => import('@/views/admin/login'),
    },
    {
      path: 'authn',
      name: '/admin/authn',
      redirect: '/admin/login'
    }
  ]
}
