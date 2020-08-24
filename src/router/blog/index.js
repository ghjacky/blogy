import Layout from '@/components/blog/Layout'
export const BlogRouter = {
  path: '/blog',
  name: '/blog/*',
  component: Layout,
  redirect: '/blog/latest',
  meta: { title: '我的博客' },
  children: [
    // {
    //   path: 'home',
    //   name: '/blog/home',
    //   component: () => import('@/views/blog/Home'),
    //   meta: { title: '博客首页' }
    // },
    {
      path: 'latest',
      name: '/blog/latest',
      component: () => import('@/views/blog/Latest'),
      meta: { title: '最新文章' }
    },
    {
      path: 'posts',
      name: '/blog/posts',
      component: () => import('@/views/blog/Posts')
    },
    {
      path: 'post/:id',
      name: '/blog/post',
      component: () => import('@/views/blog/Post')
    },
    {
      path: 'about',
      name: '/blog/about',
      component: () => import('@/views/blog/About'),
      meta: { title: '关于' }
    }
  ]
}
