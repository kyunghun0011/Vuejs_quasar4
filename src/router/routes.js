
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',          component: () => import('pages/Index.vue') } , 
      { path: '/test',     component: () => import('components/test.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/user/login',    component: () => import('components/user-cmp/login.vue') },
      { path: '/user/register', component: () => import('components/user-cmp/register.vue')}
    ]
  },
  {
    path: '/board',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/board/posts',          name : 'posts',      component: () => import('components/post-cmp/postList.vue') }  ,
      { path: '/board/postDetail/:id', name : 'postDetail', component: () => import('components/post-cmp/postDetail.vue') , props : true } ,
      { path: '/board/postEdit/:id',   name : 'postEdit' ,  component: () => import('components/post-cmp/postEdit.vue'), props : true }   
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
