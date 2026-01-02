<script setup>
import { ref } from 'vue';
const contador = ref(0);
const Incrementar = () => {
  contador.value++;
}

const Decrementar = () => {
  contador.value--;
}
</script>

<template>
  <p>{{ contador }}</p>
  <button @click="Incrementar">Incrementar</button>
  <button @click="Decrementar">Decrementar</button>
</template>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
}
p {
  font-size: 24px;
  color: blue;
  font-weight: bold;
}
</style>
