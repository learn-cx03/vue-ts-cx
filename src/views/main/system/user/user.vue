<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content :contentTableConfig="contentTableConfig"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  setup() {
    return {
      searchFormConfig,

      contentTableConfig
    }
  },
  components: {
    PageSearch,
    PageContent
  }
})
</script>

<style scoped></style>
