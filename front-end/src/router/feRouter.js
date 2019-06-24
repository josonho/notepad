import Main from '@/components/navMenu'

export default {
  router: [
    {
      path: '/login',
      name: '登录',
      component: resolve => require(['@/notepad-fe/login'], resolve)
    },
    {
      path: '/',
      name: '未完成',
      isTopShow: true,
      component: Main,
      iconCls: 'el-icon-document',
      children: [
        {
          hidden: false,
          path: '/',
          component: resolve => require(['@/notepad-fe/work/workList'], resolve),
          name: '全部记事'
        },
        {
          hidden: true,
          path: '/work/workEdit',
          component: resolve => require(['@/notepad-fe/work/workEdit'], resolve),
          name: '工作编辑'
      }]
    },
    {
      path: '/recycleBin',
      name: '回收站',
      isTopShow: true,
      component: Main,
      iconCls: 'el-icon-delete-solid',
      children: [
        {
          hidden: false,
          path: '/recycleBin/recycleList',
          component: resolve => require(['@/notepad-fe/recycleBin/recycleList'], resolve),
          name: '回收工作列表'
        },
        {
          hidden: false,
          path: '/recycleBin/recycleList',
          component: resolve => require(['@/notepad-fe/recycleBin/recycleList'], resolve),
          name: '回收工作列表'
        },
        {
          hidden: false,
          path: '/recycleBin/recycleList',
          component: resolve => require(['@/notepad-fe/recycleBin/recycleList'], resolve),
          name: '回收工作列表',
          children: [
            {
              hidden: false,
              path: '/',
              component: resolve => require(['@/notepad-fe/work/workList'], resolve),
              name: '全部记事'
            },
            {
              hidden: false,
              path: '/',
              component: resolve => require(['@/notepad-fe/work/workList'], resolve),
              name: '全部记事'
            },
            {
              hidden: true,
              path: '/work/workEdit',
              component: resolve => require(['@/notepad-fe/work/workEdit'], resolve),
              name: '工作编辑'
            }]
        },
        ]
    },
  ]
}