<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <div class="content">
      <cx-table :listData="userList" :propList="propList"></cx-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { useStore } from '@/store'
import CxTable from '@/base-ui/table'

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
      { prop: 'enable', label: '状态', minWidth: '100' },
      { prop: 'createAt', label: '创建时间', minWidth: '250' },
      { prop: 'updateAt', label: '更新时间', minWidth: '250' }
    ]
    return {
      searchFormConfig,
      userList,
      propList
    }
  },
  components: {
    PageSearch,
    CxTable
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
