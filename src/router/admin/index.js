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
      path: 'post',
      name: '/admin/post',
      component: () => import('@/views/admin/adminPost'),
      meta: { title: '文章管理' }
    },
    {
      path: 'category',
      name: '/admin/category',
      component: () => import('@/views/admin/adminCategory'),
      meta: { title: '分类管理' }
    }
  ]
}
