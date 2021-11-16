<template>
  <div class="page-search">
    <div class="search">
      <cx-form v-bind="searchFormConfig" v-model="formData">
        <template #header>
          <h1>高级检索</h1>
        </template>
        <template #footer>
          <div class="handle-btns">
            <el-button type="primary" @click="handleResetClick">
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
  setup(props) {
    const formItems = props.searchFormConfig?.formItem ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    const handleResetClick = () => {
      formData.value = formOriginData
    }
    return {
      formData,
      handleResetClick
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
