<template>
  <div class="homepage">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="标题">
      </el-table-column>
      <el-table-column prop="content" label="内容" width="400">
      </el-table-column>
      <el-table-column prop="workType" label="类型">
      </el-table-column>
      <el-table-column prop="level" label="优先级">
      </el-table-column>
      <el-table-column prop="level" label="优先级">
      </el-table-column>
      <el-table-column prop="updatedAt" label="上次修改" width="200">
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="editWork(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="editWork">新增工作</el-button>
    <el-button @click="tologin">返回登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      dialogVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods:{
    tologin(){
      this.$router.push({ path: '/login' });
    },
    handleDelete(index, row) {
      console.log(index, row);
      // 删除确认框
      this.$confirm('是否删除该工作?', '确认删除', {
          confirmButtonText: '删除',
          cancelButtonText: '取消',
          center: true
      }).then(() => {
        this.$axios.post("/delete",{
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
      this.$axios.get("/query",{
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
        this.$router.push({ path: '/workEdit/workEdit', query: {id: row.id}});
      }else{
        this.$router.push({ path: '/workEdit/workEdit'});
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
<style scoped>
  h1{
    color: red;
  }
</style>

