<script setup lang="ts">
  import { ref } from "vue";

  const color = ref("red");
  const changeColor = () => {
    color.value = "green";
  };
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1 class="header-title">标题</h1>
  <button @click="changeColor">修改颜色</button>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .header-title {
    color: v-bind(color);
  }
</style>
