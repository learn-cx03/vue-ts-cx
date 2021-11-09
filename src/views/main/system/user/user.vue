<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <div class="content">
      <cx-table
        :listData="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
      >
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { useStore } from '@/store'
import CxTable from '@/base-ui/table'
import { DeleteFilled, Edit } from '@element-plus/icons'

export default defineComponent({
  name: 'user',
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      {
        label: '操作',
        minWidth: '120',
        slotName: 'handler'
      }
    ]

    const showIndexColumn = true
    const showSelectColumn = true

    return {
      searchFormConfig,
      userList,
      propList,
      showIndexColumn,
      showSelectColumn
    }
  },
  components: {
    PageSearch,
    CxTable,
    Edit,
    DeleteFilled
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
