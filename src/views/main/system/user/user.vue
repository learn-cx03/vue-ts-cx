<template>
  <div class="user">
    <div>
      <div class="search">
        <cx-form v-bind="searchFormConfig" />
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CxForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  setup() {
    return {
      searchFormConfig
    }
  },
  components: {
    CxForm
  }
})
</script>

<style scoped></style>
