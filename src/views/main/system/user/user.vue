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

export default defineComponent({
  name: 'user',
  setup() {
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
