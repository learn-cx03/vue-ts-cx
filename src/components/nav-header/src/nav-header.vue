<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <arrow-right-bold v-if="isFold" />
      <arrow-left-bold v-else />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons'
import UserInfo from './user-info.vue'

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
    ArrowRightBold,
    UserInfo
  }
})
</script>
<style lang="less" scoped>
.nav-header {
  width: 100%;
  display: flex;

  .fold-menu {
    font-size: 25px;
    cursor: pointer;
  }

  .content {
    display: flex;
    flex: 1;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
