<template>
  <div class="page-search">
    <div class="search">
      <cx-form v-bind="searchFormConfig" v-model="formData">
        <template #header>
          <h1>高级检索</h1>
        </template>
        <template #footer>
          <div class="handle-btns">
            <el-button type="primary">
              <el-icon><help /></el-icon>
              重置</el-button
            >
            <el-button type="primary">
              <el-icon><search /></el-icon>

              搜索</el-button
            >
          </div>
        </template>
      </cx-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CxForm from '@/base-ui/form'
import { Help, Search } from '@element-plus/icons'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    CxForm,
    Help,
    Search
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>
<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
