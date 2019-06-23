export default {
  router: [
    {
      path: '/login',
      name: '登录',
      component: resolve => require(['@/notepad-fe/login'], resolve)
    },
    {
      path: '/',
      name: '首页',
      component: resolve => require(['@/notepad-fe/homepage'], resolve)
    },
    {
      path: '/workEdit/workEdit',
      name: '工作编辑',
      component: resolve => require(['@/notepad-fe/workEdit/workEdit'], resolve)
    }
  ]
}