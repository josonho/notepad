import navMenu from '@/components/navMenu'
import routerG from '@/components/routerG'

export default {
  router: [
    {
      path: '/login',
      name: '登录',
      component: resolve => require(['@/notepad-fe/login'], resolve)
    },
    // {
    //   path: '/',
    //   name: '记事本',
    //   isTopShow: true,
    //   component: routerG,
    //   iconCls: 'el-icon-document',
    //   children: [
    //     {
    //       hidden: false,
    //       path: '/work',
    //       component: navMenu,
    //       name: '待办事项',
    //       iconCls: 'el-icon-tickets',
    //       children: [{
    //         hidden: false,
    //         path: '/work/workList',
    //         component: resolve => require(['@/notepad-fe/work/workList'], resolve),
    //         name: '全部记事'
    //        },
    //        {
    //         hidden: false,
    //         path: '/work/workEdit',
    //         component: resolve => require(['@/notepad-fe/work/workEdit'], resolve),
    //         name: '新增事务'
    //        },
    //        {
    //         hidden: true,
    //         path: '/work/workEdit',
    //         component: resolve => require(['@/notepad-fe/work/workEdit'], resolve),
    //         name: '事务编辑'
    //        }
    //       ],
    //     },
    //     {
    //       hidden: false,
    //       path: '/recycleBin',
    //       component: navMenu,
    //       iconCls: 'el-icon-delete',
    //       name: '回收站',
    //       children: [{
    //         hidden: false,
    //         path: '/recycleBin/deletedList',
    //         component: resolve => require(['@/notepad-fe/recycleBin/deletedList'], resolve),
    //         name: '已删事务'
    //       },
    //       {
    //         hidden: false,
    //         path: '/recycleBin/completedList',
    //         component: resolve => require(['@/notepad-fe/recycleBin/completedList'], resolve),
    //         name: '已完成事务'
    //       }
    //     ],
    //   }]
    // },
    {
      path: '/',
      name: '记事本',
      isTopShow: true,
      component: routerG,
      iconCls: 'el-icon-document',
      children: [
        {
          hidden: false,
          path: '/work',
          component: navMenu,
          name: '待办事项',
          iconCls: 'el-icon-tickets',
          children: [{
            hidden: false,
            path: '/work/workList',
            component: resolve => require(['@/notepad-fe/work/workList'], resolve),
            name: '全部记事'
           },
           {
            hidden: false,
            path: '/work/workEdit',
            component: resolve => require(['@/notepad-fe/work/workEdit'], resolve),
            name: '新增事务'
           },
           {
            hidden: true,
            path: '/work/workEdit',
            component: resolve => require(['@/notepad-fe/work/workEdit'], resolve),
            name: '事务编辑'
           }
          ],
        },
        {
          hidden: false,
          path: '/recycleBin',
          component: navMenu,
          iconCls: 'el-icon-delete',
          name: '回收站',
          children: [{
            hidden: false,
            path: '/recycleBin/deletedList',
            component: resolve => require(['@/notepad-fe/recycleBin/deletedList'], resolve),
            name: '已删事务'
          },
          {
            hidden: false,
            path: '/recycleBin/completedList',
            component: resolve => require(['@/notepad-fe/recycleBin/completedList'], resolve),
            name: '已完成事务'
          }
        ],
      }]
    },
    {
      path: '/',
      name: '关于作者',
      isTopShow: true,
      component: routerG,
      iconCls: 'el-icon-user',
      children: [
        {
          hidden: false,
          path: '/knowMe',
          component: navMenu,
          iconCls: 'el-icon-s-promotion',
          name: '我的简历',
          children: [{
            hidden: false,
            path: '/knowMe/knowMe',
            component: resolve => require(['@/notepad-fe/knowMe/knowMe'], resolve),
            name: '我的简历'
          },
        ],
      }]
    },
    
  ]
}