export const AdminRouter = {
  path: '/admin',
  name: '/admin/*',
  component: () => import('@/components/admin/layout/AdminLayout'),
  children: [
    {
      path: 'authn',
      name: '/admin/authn',
      redirect: '/admin/login'
    },
    {
      path: '',
      name: '/admin',
      component: () => import('@/views/admin/main')
    },
    {
      path: 'post',
      name: '/admin/post',
      component: () => import('@/views/admin/post'),
      meta: { title: '文章管理' }
    }
  ]
}

export const LoginRouter = {
  path: 'login',
  name: '/admin/login',
  component: () => import('@/views/admin/login')
}
