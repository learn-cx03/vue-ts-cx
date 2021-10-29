<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <arrow-right-bold v-if="isFold" />
      <arrow-left-bold v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons'

export default defineComponent({
  emits: ['foldchange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldchange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  },
  components: {
    ArrowLeftBold,
    ArrowRightBold
  }
})
</script>
<style lang="less" scoped>
.nav-header {
  .fold-menu {
    font-size: 25px;
    cursor: pointer;
  }
}
</style>
