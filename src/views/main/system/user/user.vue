<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { useStore } from 'vuex'

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
    return {
      searchFormConfig
    }
  },
  components: {
    PageSearch
  }
})
</script>

<style scoped></style>
