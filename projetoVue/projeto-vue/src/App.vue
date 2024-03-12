<script setup>// Onde fica o código JS e TS
import BotoesVue from "./components/Botoes.vue";
// import Cabecalho from './components/Cabecalho.vue';
// import NavBar from './components/NavBar.vue';
// import Usuario from './components/Usuario.vue';

</script>

<template> <!-- Onde ficará o HTML -->
  <!-- <NavBar></NavBar> -->
  <!-- <component :is="NavBar"></component> -->
  <header>
    <!-- <Cabecalho></Cabecalho> Inserção de componente -->
  </header>

  <main>
    <BotoesVue></BotoesVue>
    <!-- <Usuario></Usuario> -->
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

header {
  line-height: 1.5;
}
</style>
