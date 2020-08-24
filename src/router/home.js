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
      meta: { title: '主页' },
    }
  ]
}
