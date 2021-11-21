<template>
  <ul class="v-menu-layout">
    <li class="v-menu-item" v-for="item in data" :key="item.title">{{ item.title }}</li>
  </ul>
</template>
<script setup lang="ts">
  import type IMenuItem from "@/types/menu";
  import { defineComponent, defineEmits, PropType, ref } from "vue";

  defineProps({
    data: {
      type: Array as PropType<Array<IMenuItem>>,
      default: () => [],
    },
  });
</script>
<style scoped lang="scss">
  .v-menu-layout {
    display: flex;
  }
  .v-menu-item {
    color: #fff;
    font-size: 14px;
  }
</style>
