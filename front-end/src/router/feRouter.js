import navMenu from '@/components/navMenu'
import routerG from '@/components/routerG'

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
      component: routerG,
      iconCls: 'el-icon-document',
      children: [
        {
          hidden: false,
          path: '/work/workList',
          component: navMenu,
          name: '全部记事',
          children: [{
            hidden: false,
            path: '/work/workList',
            component: resolve => require(['@/notepad-fe/work/workList'], resolve),
            name: '全部记事'
           },
          ],
        },
        {
          hidden: false,
          path: '/work/workList',
          component: navMenu,
          name: '工作编辑',
          children: [{
            hidden: false,
            path: '/work/workEdit',
            component: resolve => require(['@/notepad-fe/work/workEdit'], resolve),
            name: '工作编辑'
           }
          ],
      }]
    },
    {
      path: '/recycleBin',
      name: '回收站',
      component: routerG,
      isTopShow: true,
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
          name: '回收工作列表'
        },
        ]
    },
  ]
}