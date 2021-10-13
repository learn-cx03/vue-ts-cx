<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>{{ $store.state.name }}</h2>
    <div class="app1">
      <router-link to="/login">登入</router-link>
      <router-link to="/main">首页</router-link>
      <router-view></router-view>
      <el-button>哈哈</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { ElButton } from 'element-plus'
import 'element-plus/theme-chalk/el-button.css'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
.app {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.app1 {
  display: flex;
  justify-content: center;
}

// .app2 {
//   display: flex;
//   justify-content: center;
// }
</style>
