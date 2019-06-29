<template>
<div class="content-g notebookList">
  <div class="list-content">
    <div class="list-header">
      <el-button @click="editWork" class="list-header-r">新增笔记</el-button> 
    </div>
    <div class="card-g">
      <div class="card">
        <div class="card-item" v-for="(item,index) in tableData" :key="index" @click="clickCard(index,item)">
          <div class="item-name-g">
            <div class="item-name">
              <p class="card-item-name">
                {{item.name}}
              </p>
            </div>
          </div>
          <quill-editor v-model="item.content_simple"
            disabled="true"
            class="editer">
          </quill-editor>
          <!-- click.stop阻止事件冒泡 -->
          <el-button type="primary" icon="el-icon-edit" size="mini" class="card-button-left" @click.stop="editWork(index,item)"></el-button>
          <el-button type="primary" icon="el-icon-delete" size="mini" class="card-button-right" @click.stop="deleteWork(index,item)"></el-button>
        </div>
      </div>
    </div>
  </div>
  
  <div class="list-footer">
    <el-pagination
      small
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'workList',
  data () {
    return {
      content: 'uoasuoquwoequ',
      dialogVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      isSelectedCard: ''
    }
  },
  methods:{
    clickCard(index,item){
      console.log('点击卡片');
      this.$router.push({ path: '/notebook/notebookDetails', query: {content: item.content}});
    },
    deleteWork(index, row) {
      console.log(index, row);
      // 删除确认框
      this.$confirm('是否删除该工作?', '确认删除', {
          confirmButtonText: '删除',
          cancelButtonText: '取消',
          center: true
      }).then(() => {
        this.$axios.post("/deleteBin",{
          'id': row.id  //post不需要用params
        }).then((res) =>{   
          this.$message(res.data);
          this.getWorkData();
        }).catch((err) =>{
          console.log(err) 
        });
      }).catch(() => {
          console.log('cancel');       
      });
    },
    getWorkData(){
      this.$axios.get("/queryUE",{
        params: {
          
        }
      }).then((res) =>{          //这里使用了ES6的语法
        console.log(res)
        this.tableData = this.renderData(res.data);
      }).catch((err) =>{
        console.log(err)       //请求失败返回的数据
      })
    },
    editWork(index, row){
      if(row){
        this.$router.push({ path: '/notebook/notebookEdit', query: {id: row.id}});
      }else{
        this.$router.push({ path: '/notebook/notebookEdit'});
      }
    },
    renderData(data){
      let thisData = data;
      thisData.forEach((item,index) => {
        if(item.workType===0){
          item.workType = '娱乐'
        }else if(item.workType===1){
          item.workType = '工作'
        }else if(item.workType===2){
          item.workType = '学习'
        }else if(item.workType===3){
          item.workType = '其他'
        };
        if(item.level===0){
          item.level = '低'
        }else if(item.level===1){
          item.level = '中'
        }else if(item.level===2){
          item.level = '高'
        };
        item.updatedAt = this.$fn.dateFormat(item.updatedAt,'yyyy-MM-dd hh:mm:ss');
      });
      return thisData;
    },
    
  },
  mounted(){
    this.getWorkData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.notebookList {  //去掉scope，加类名防止css污染
  .card-g {
    padding: 10px 0 20px 30px;
    width: 100%;
    display: inline-block;//解决浮动不能撑开
    & .card {
      & .card-item {
        margin-top: 20px;
        margin-right: 20px;
        width: 150px;
        height: 200px;
        background: rgb(185, 185, 185);
        float: left;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
        & .item-name-g {
          width: 100%;
          & .item-name {
            width: 100%;
            background: rgb(141, 199, 188);
            & .card-item-name {
              width: 90%;
              line-height: 30px;
              text-align: center;
              overflow: hidden;/*超出部分隐藏*/
              white-space: nowrap;/*不换行*/
              text-overflow:ellipsis;/*超出部分文字以...显示*/
            }
          }
        }
        & .editer {
          & .ql-toolbar.ql-snow {
            display: none; //隐藏编辑工具
          }
          & .ql-container.ql-snow {
            border: none;
          }
          & * {
            cursor: pointer;  //更改富文本鼠标为手指型
          }
        }
        & .card-button-left {
          position: absolute;
          bottom: 0;
          left: 0;
          border-top-right-radius: 40px;
          width: 40px;
        }
        & .card-button-right {
          position: absolute;
          bottom: 0;
          right: 0;
          border-top-left-radius: 40px;
          width: 40px;
        }
      }
    }
  }
}
</style>

