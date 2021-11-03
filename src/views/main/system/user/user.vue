<template>
  <div class="user">
    <div>
      <div class="search">
        <cx-form :formItems="formItems" />
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CxForm, { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: '用户名',
        rules: [],
        placeholder: '请输入用户名'
      },
      {
        type: 'password',
        label: '密码',
        placeholder: '请输入密码'
      },
      {
        type: 'select',
        label: '喜欢的运动',
        placeholder: '请选择喜欢的运动',
        options: [
          { title: '篮球', value: 'basketball' },
          { title: '足球', value: 'football' }
        ]
      },
      {
        type: 'datepicker',
        label: '创建时间',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'daterange'
        }
      }
    ]

    return {
      formItems
    }
  },
  components: {
    CxForm
  }
})
</script>

<style scoped></style>
