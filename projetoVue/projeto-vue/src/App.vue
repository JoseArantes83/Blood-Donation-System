<script setup>// Onde fica o código JS e TS
import BotoesVue from "./components/Botoes.vue";
import Formulario from "./components/Formulario.vue";
</script>

<template> <!-- Onde ficará o HTML -->
  <!-- <component :is="NavBar"></component> -->
  <header>
  </header>

  <main>
    <Formulario></Formulario>
    <!-- <BotoesVue></BotoesVue> -->
  </main>
</template>

<style>
/* Onde ficará o código CSS */
* {
  margin: 5px;
  padding: 1px;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
