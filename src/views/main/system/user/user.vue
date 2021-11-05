<template>
  <div class="user">
    <div>
      <div class="search">
        <cx-form v-bind="searchFormConfig" v-model="formData" />
      </div>
      <div class="content">
        <button>点击</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CxForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      searchFormConfig,
      formData
    }
  },
  components: {
    CxForm
  }
})
</script>

<style scoped></style>
