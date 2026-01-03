<script setup>
  import Sidebar from "../components/SideBar.vue";
</script>

<template>
  <div class="container">
    <Sidebar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;
}

.content {
  padding: 20px;
}
</style>