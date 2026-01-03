<script setup>

</script>

<template>
  <div class="sidebar">
    <h2>Barra lateral</h2>
    <ul>
      <li>
        <router-link to="/contador">Contador</router-link>
      </li>
      <li>
        <router-link to="/lista-tareas">Lista de tareas</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: #f4f4f4;
    padding: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li a {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 10px 7px;
    border-radius: 5px;
    border: solid 1px #ccc;
    margin-bottom: 7px;
    &:hover {
      background-color: #ddd;
    }
  }
</style>