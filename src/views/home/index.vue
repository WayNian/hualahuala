<template>
  <div style="background-color: cadetblue; padding: 10px">
    <VMenu :data="menuOptions" />
    <VButton @click="changeColor" type="primary">切换主题</VButton></div
  >
  <router-view />
</template>
<script setup lang="ts">
  import { defineComponent, defineEmits, ref } from "vue";
  import VMenu from "@/components/VMenu/index.vue";
  import VButton from "@/components/VButton/index.vue";
  import IMenuItem from "@/types/menu";
  import { useThemeStore } from "@/stores";

  const store = useThemeStore();
  const color = ref("red");
  const changeColor = () => {
    color.value = "#fff";
    document.body.style.backgroundColor = "black";
    store.baseTextColor = "blue";
  };
  defineProps({
    type: {
      type: String,
      default: "",
    },
  });
  const menuOptions: Array<IMenuItem> = [
    {
      title: "主站",
    },
    {
      title: "番剧",
    },
    {
      title: "游戏中心",
    },
  ];
</script>

<style scoped lang="scss"></style>
