import navMenu from '@/components/navMenu'
import routerG from '@/components/routerG'

export default {
  router: [
    { path: '/', redirect: '/work/workList' },
    {
      path: '/login',
      name: '登录',
      component: resolve => require(['@/notepad-fe/login'], resolve)
    },
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
      name: '笔记本',
      isTopShow: true,
      component: routerG,
      iconCls: 'el-icon-document',
      children: [
        {
          hidden: false,
          path: '/notebook',
          component: navMenu,
          name: '我的笔记',
          iconCls: 'el-icon-tickets',
          children: [{
            hidden: false,
            path: '/notebook/notebookList',
            component: resolve => require(['@/notepad-fe/notebook/notebookList'], resolve),
            name: '全部笔记'
           },
           {
            hidden: false,
            path: '/notebook/notebookStar',
            component: resolve => require(['@/notepad-fe/notebook/notebookStar'], resolve),
            name: '星标笔记'
           },
           {
            hidden: false,
            path: '/notebook/notebookEdit',
            component: resolve => require(['@/notepad-fe/notebook/notebookEdit'], resolve),
            name: '新增笔记'
           },
           {
            hidden: true,
            path: '/notebook/notebookDetails',
            component: resolve => require(['@/notepad-fe/notebook/notebookDetails'], resolve),
            name: '笔记本详细'
           },
          ],
        },
        {
          hidden: false,
          path: '/notebookRecycleBin',
          component: navMenu,
          iconCls: 'el-icon-delete',
          name: '回收站',
          children: [{
            hidden: false,
            path: '/notebookRecycleBin/notebookDeletedList',
            component: resolve => require(['@/notepad-fe/notebookRecycleBin/notebookDeletedList'], resolve),
            name: '已删笔记'
          },
        ],
      }]
    },
    {
      path: '/',
      name: '工作台',
      isTopShow: true,
      component: routerG,
      iconCls: 'el-icon-document',
      children: [
        {
          hidden: false,
          path: '/workbench',
          component: navMenu,
          name: '所有工作',
          iconCls: 'el-icon-tickets',
          children: [{
            hidden: false,
            path: '/workbench/workbenchSelf',
            component: resolve => require(['@/notepad-fe/workbench/workbenchSelf'], resolve),
            name: '个人工作'
           },
           {
            hidden: false,
            path: '/workbench/workbenchTeam',
            component: resolve => require(['@/notepad-fe/workbench/workbenchTeam'], resolve),
            name: '团队工作'
           },
          ],
        },
        {
          hidden: false,
          path: '/workbenchRecycleBin',
          component: navMenu,
          iconCls: 'el-icon-delete',
          name: '回收站',
          children: [{
            hidden: false,
            path: '/workbenchRecycleBin/workbenchCompletedList',
            component: resolve => require(['@/notepad-fe/workbenchRecycleBin/workbenchCompletedList'], resolve),
            name: '已完成工作'
          },
          {
            hidden: false,
            path: '/workbenchRecycleBin/workbenchDeletedList',
            component: resolve => require(['@/notepad-fe/workbenchRecycleBin/workbenchDeletedList'], resolve),
            name: '已删除工作'
          },
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