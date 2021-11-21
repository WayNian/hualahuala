<template>
  <button type="button" @click="handleClick" :class="[type ? `v-btn-${type}` : '', 'v-btn']">
    <span class="v-btn-content">
      <slot></slot>
    </span>
  </button>
</template>
<script setup lang="ts">
  import { useThemeStore } from "@/stores";
  import { defineComponent, defineEmits, unref } from "vue";

  defineProps({
    type: {
      type: String,
      default: "",
    },
  });

  const store = unref(useThemeStore());
  const emits = defineEmits<{
    (e: "click"): void;
  }>();

  const handleClick = (e: MouseEvent) => {
    console.log(e.target);
    emits("click");
  };
</script>
<style scoped lang="scss">
  .v-btn {
    color: $basetextcolor;
    background-color: $basetextcolor;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    box-shadow: 0 2px #00000004;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0 20px;
    appearance: button;
    cursor: pointer;
    word-break: break-word;
    transition: all 0.2s ease;
    white-space: nowrap;
  }
  .v-btn-primary {
    color: $basetextcolor;
    background-color: #00a1d6;
    border-color: #00a1d6;
    &:hover {
      background-color: #00b5e5;
      color: #fff;
      border-color: #00b5e5;
    }
  }
  .v-btn-content {
    font-size: 14px;
  }
</style>
