<template>
  <div class="content-g pd20">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="工作名称">
        <el-input v-model="form.name" clear="el-input_w_300"></el-input>
      </el-form-item>
      <el-form-item label="工作类型">
        <el-radio-group v-model="form.workType">
          <el-radio label="0">娱乐</el-radio>
          <el-radio label="1">工作</el-radio>
          <el-radio label="2">学习</el-radio>
          <el-radio label="3">其他</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="优先级">
        <el-radio-group v-model="form.level">
          <el-radio label="0">低</el-radio>
          <el-radio label="1">中</el-radio>
          <el-radio label="2">高</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="截止时间" class="el-input_w_200">
        <el-col :span="11">
          <el-date-picker type="datetime" placeholder="选择日期时间" v-model="form.deadline" value-format="timestamp" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="内容">
        <quill-editor v-model="form.content"
          class="editer"
          :options="editorOption">
        </quill-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" v-if="!workId">提交创建</el-button>
        <el-button type="primary" @click="onSubmit" v-if="workId">提交编辑</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        workId: '',
        form: {
          name: '',
          workType: '',
          level: '',
          deadline: '',
          content: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        console.log(this.form);
        var now = Date.now();
        if(this.workId){  //编辑
          this.form.id = this.workId;
          this.form.updatedAt = now;
          this.form.isComplete = 'false';
          this.form.content_simple = this.form.content.substring(0,200);
          this.$axios.post("/updateUE",this.form).then((res) =>{   
              this.$message(res.data);
              this.$router.go(-1);//返回上一层
            }).catch((err) =>{
              console.log(err) 
          })
        }else{  //新增
          this.form.id = 'g-' + now;
          this.form.createdAt = now;
          this.form.updatedAt = now;
          this.form.isComplete = 'false';
          this.form.content_simple = this.form.content.substring(0,200);
          this.$axios.post("/addUE",this.form).then((res) =>{   
              this.$message(res.data);
              this.$router.go(-1);//返回上一层
            }).catch((err) =>{
              console.log(err) 
          })
        }
      },
      getWorkDetails(){
        this.$axios.get("/queryId",{
        params: {
          id : this.workId
        }
        }).then((res) =>{          //这里使用了ES6的语法
          console.log(res)
          this.form = this.renderData(res.data[0]);
          console.log(this.form)
        }).catch((err) =>{
          console.log(err)       //请求失败返回的数据
        })
      },
      renderData(data){
        data.workType = data.workType+'';
        data.level = data.level+'';
        return data;
      },
      cancel(){
        this.$router.go(-1);//返回上一层
      },
    },
    mounted(){
      this.$route.query.id?(this.workId = this.$route.query.id)&&(this.getWorkDetails()):this.workId = null;
      
      console.log(this.workId)
    }
  }
</script>