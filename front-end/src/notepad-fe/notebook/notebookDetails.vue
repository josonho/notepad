<template>
  <div class="content-g pd20">
    <quill-editor v-model="content"
      class="editer">
    </quill-editor>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        content: '',
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
          this.$axios.post("/update",this.form).then((res) =>{   
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
          this.$axios.post("/add",this.form).then((res) =>{   
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
     this.content = this.$route.query.content;
    }
  }
</script>