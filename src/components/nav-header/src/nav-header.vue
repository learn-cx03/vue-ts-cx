<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <arrow-right-bold v-if="isFold" />
      <arrow-left-bold v-else />
    </el-icon>
    <div class="content">
      <cx-breadcrumb
        :breadcrumbs="breadcrumbs"
        class="cx-breadcrumb"
      ></cx-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons'
import UserInfo from './user-info.vue'
import CxBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  emits: ['foldchange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldchange', isFold.value)
    }

    //面包屑的数据
    const store = useStore()

    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path

      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  },
  components: {
    ArrowLeftBold,
    ArrowRightBold,
    UserInfo,
    CxBreadcrumb
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
