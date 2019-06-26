<template>
  <div class="login">
    <div class="form-g">
      <el-form :model="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号">
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="ruleForm.passWord" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
          <el-button @click="">忘记密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'login',
    data() {
      return {
        ruleForm: {
          name: '',
          passWord: '',
        },
      };
    },
    methods: {
      submitForm() {
        if(this.ruleForm.name=='18476613936'&&this.ruleForm.passWord=='123456'){
          this.toWorkList();
          this.$message('登录成功')
        }else{
          this.$message('账号或密码错误')
        }
      },
      toWorkList(){
        this.$router.push({ path: '/work/workList' });
      },
    }
  }
</script>

<style scoped  lang="scss">
.login {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: url(../assets/image/login_bg.png);
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & .form-g {
    width: 311px;
  }
}
</style>

