<template>
  <div class="page-content">
    <cx-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
    >
      <!--header中的插槽-->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>
      <!--列表中的插槽-->
      <template #status="scope"
        ><el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '可用' : '不可用' }}</el-button
        ></template
      >
      <template #createAt="scope">
        <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong> {{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #handler>
        <div class="handler-btns">
          <el-button size="mini" type="text"
            ><el-icon><edit /></el-icon>编辑</el-button
          >
          <el-button size="mini" type="text "
            ><el-icon><delete-filled /></el-icon>删除</el-button
          >
        </div>
      </template>
    </cx-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import CxTable from '@/base-ui/table'
import { DeleteFilled, Edit } from '@element-plus/icons'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  components: {
    CxTable,
    Edit,
    DeleteFilled
  },

  setup(props) {
    const store = useStore()
    //发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...queryInfo
        }
      })
    }

    getPageData()

    //从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)
    return {
      dataList,
      getPageData,
      dataCount
    }
  }
})
</script>
<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
