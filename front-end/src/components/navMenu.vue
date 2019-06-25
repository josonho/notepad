<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="5" class="logo" :class="'logo-width'">
        <a href="/" style="text-decoration:none;color:#FFFFFF;">{{sysName}}</a>
      </el-col>
      <!-- 顶部导航栏 -->
      <el-col :span="14" class="top-menu-g" :class="'logo-width'">
        <ul class="top-menu">
          <li class="top-menu-item" :class="index==isSelected?'top-menu-selected':''" v-for="(item,index) in topMennudata" :key="index" @click="topJump(index)">
            <i :class="item.iconCls"></i>
            {{item.name}}
            </li>
        </ul>
      </el-col>
      <el-col :span="5" class="userinfo">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner">你好：{{sysUserName}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <a href="#/">首页</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a @click>修改密码</a>
            </el-dropdown-item>
            <el-dropdown-item @click.native>注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        <el-row>
          <div class="tools" @click.prevent="collapse">
            {{collapsed?'展开':'收起'}}
            <i :class="collapsed?'el-icon-arrow-right':'el-icon-arrow-left'"></i>
          </div>
        </el-row>
        <!--导航菜单-->
        <el-menu
          v-bind:style=" collapsed ? {} : { 'width': '230px' } "
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          unique-opened
          router
          v-show="!collapsed"
        >
          <template v-for="(item,index) in menuData[isSelected].children" v-if="!item.hidden">
            <el-submenu :index="index+''">
              <template slot="title">
                <i :class="item.iconCls"></i>
                {{item.name}}
              </template>
              <el-menu-item
                v-for="child in item.children"
                :index="child.path"
                :key="child.path"
                v-if="!child.hidden"
              >{{child.name}}</el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
        <!--导航菜单-折叠后-->
        <ul
          class="el-menu el-menu-vertical-demo collapsed el-menu-collapsed"
          v-show="collapsed"
          ref="menuCollapsed"
        >
          <li v-for="(item,index) in menuData[isSelected].children" :key="index" v-if="!item.hidden" class="el-submenu item">
            <template>
              <div
                class="el-submenu__title"
                style="padding-left: 20px;"
                @mouseover="showMenu(index,true)"
                @mouseout="showMenu(index,false)"
              >
                <i :class="item.iconCls"></i>
              </div>
              <ul
                class="el-menu submenu"
                :class="'submenu-hook-'+index"
                @mouseover="showMenu(index,true)"
                @mouseout="showMenu(index,false)"
              >
                <li
                  v-for="child in item.children"
                  v-if="!child.hidden"
                  :key="child.path"
                  class="el-menu-item"
                  style="padding-left: 40px;"
                  :class="$route.path==child.path?'is-active':''"
                  @click="$router.push(child.path)"
                >{{child.name}}</li>
              </ul>
            </template>
          </li>
        </ul>
      </aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/" class="breadcrumb-inner">
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{ item.name }}</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
import { constants } from 'fs';
export default {
  data() {
    return {
      topMennudata: [],
      isSelected: '0',
      sysName: "备忘录",
      menuData: [],
      collapsed: false,
      sysUserName: "何召顺"
    };
  },
  methods: {
    topJump: function(index){
      this.isSelected = index;
      console.log('跳转',index)
    },
    //折叠导航栏
    collapse: function() {
      this.collapsed = !this.collapsed;
    },
    showMenu: function(i, status) {
      this.$refs.menuCollapsed.getElementsByClassName(
        "submenu-hook-" + i
      )[0].style.display = status ? "block" : "none";
    },
    initMenu: function() {
      console.log(JSON.stringify(this.$router.options.routes));
      for (let i in this.$router.options.routes) {
        let root = this.$router.options.routes[i];
        if(root.isTopShow){
          this.topMennudata.push({
            name: root.name,
            iconCls: root.iconCls
          });
          this.menuData.push(root)
        };
      }
      // console.log(JSON.stringify(allRouter));
    },
    
  },
  mounted: function() {
    this.initMenu();
  }
};
</script>

<style scoped="scoped" lang="scss">
.container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  .header {
    height: 90px;
    line-height: 90px;
    background: #545c64;
    color: #fff;
    .logo {
      height: 90px;
      font-size: 22px;
      padding-left: 20px;
      padding-right: 20px;
      border-color: rgba(238, 241, 146, 0.3);
      .txt {
        color: #fff;
      }
    }
    .top-menu-g {
      cursor: pointer;
      line-height:0;
      .top-menu {
        list-style: none;
        margin: 0;
        display: flex;
        height: 90px;
        .top-menu-item {
          padding: 0 20px;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          padding-bottom: 15px;
          i {
            font-size: 40px;
            margin-bottom: 20px;
          }
        }
        .top-menu-selected {
          background: #8d8e8f
        }
      }
    }
    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
      }
    }
  }
  .main {
    display: flex;
    position: absolute;
    top: 90px;
    bottom: 0;
    overflow: hidden;
    aside {
      flex: 0 0 230px;
      width: 230px;
      .tools {
        width: 100%;
        font-size: 12px;
        height: 25px;
        line-height: 25px;
        cursor: pointer;
        text-align: center;
        margin: 0 auto;
      }
      /*侧边菜单*/
      .el-menu {
        height: 100%;
      }
      .el-menu:first-child {
        overflow-y: auto !important;
      }
      .el-menu-collapsed {
        /*选中列*/
        .el-menu-item {
          color: rgb(0, 0, 0);
        }
      }
      .el-menu-collapsed li:hover {
        color: #409eff;
      }
      .collapsed {
        width: 60px;
        .item {
          position: relative;
        }
        .submenu {
          position: absolute;
          top: 0;
          left: 60px;
          z-index: 99999;
          height: auto;
          display: none;
        }
      }
    }
    .menu-collapsed {
      flex: 0 0 60px;
      width: 60px;
    }
    .menu-expanded {
      flex: 0 0 230px;
      width: 230px;
    }
    .content-container {
      flex: 1;
      overflow-y: scroll;
      padding: 10px 20px 20px 20px;
      background-color: #d3d7d4;
      .breadcrumb-container {
        padding-bottom: 8px;
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        box-sizing: border-box;
      }
    }
  }
}
</style>