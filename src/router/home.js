export const HomeRouter = {
  path: '/',
  name: '/',
  component: () => import('@/views/Home'),
  meta: { title: '主页' },
  children: [
    {
      path: 'home',
      name: '/home',
      component: () => import('@/views/Home'),
      meta: { title: '主页' },
    }
  ]
}
