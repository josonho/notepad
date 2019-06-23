<template>
  <div class="login">
    <h1>这里是登录页面</h1>
    <el-button @click="toHome">登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    toHome(){
      this.$router.push({ path: '/' });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
