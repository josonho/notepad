import Main from '@/components/navMenu'

export default {
  router: [
    {
      path: '/login',
      name: '登录',
      component: resolve => require(['@/notepad-fe/login'], resolve)
    },
    {
      path:'/',
      component: Main,
      hidden: true,
      children: [{
          path: '/',
          component: resolve => require(['@/notepad-fe/homepage'], resolve),
          name:'首页'
      }]
    },
    {
      path: '/system',
      name: '未完成',
      component: Main,
      iconCls: 'fa fa-address-card',
      children: [
        {
          hidden: false,
          path: '/',
          component: resolve => require(['@/notepad-fe/homepage'], resolve),
          name: '全部记事'
        },
        {
          hidden: true,
          path: '/workEdit/workEdit',
          component: resolve => require(['@/notepad-fe/workEdit/workEdit'], resolve),
          name: '工作编辑'
      }]
    },
  ]
}