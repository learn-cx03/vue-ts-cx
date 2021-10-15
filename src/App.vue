<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>{{ $store.state.name }}</h2>
    <router-link to="/login">登入</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
    <el-button>哈哈</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { ElButton } from 'element-plus'
import 'element-plus/theme-chalk/el-button.css'
import 'element-plus/theme-chalk/el-loading.css'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
