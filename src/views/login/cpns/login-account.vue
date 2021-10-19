<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const rules = {
      name: [
        {
          required: true,
          message: '用户名是必传内容',
          trigger: 'blur'
        },
        {
          patter: /^[a-z0-9]$/,
          min: 5,
          max: 10,
          message: '用户名必须是5到10个数字或字母',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '密码是必传内容',
          trigger: 'blur'
        },
        {
          patter: /^[a-z0-9]$/,
          min: 3,
          message: '密码必须是3位以上的数字或字母',
          trigger: 'blu'
        }
      ]
    }

    return {
      account,
      rules
    }
  }
})
</script>
<style lang="less" scoped></style>
