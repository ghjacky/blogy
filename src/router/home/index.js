import Layout from '@/components/home/Layout'
export const HomeRouter = {
  path: '/',
  name: '/',
  component: Layout,
  meta: { title: '我的博客' },
  children: [
    {
      path: 'home',
      name: '/home',
      component: () => import('@/views/home/Home'),
      meta: { title: '主页' }
    },
    {
      path: 'about',
      name: '/about',
      component: () => import('@/views/home/About'),
      meta: { title: '关于' }
    }
  ]
}
