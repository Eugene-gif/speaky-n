<script setup>
  import Header from "@/components/Header/Header.vue";
</script>

<template>
  <Header />
  <div class="base-layout">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/styles/main.scss";
</style>
