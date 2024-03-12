<script setup>// Onde fica o código JS e TS
import MudaPortaVue from "./components/MudaPorta.vue";
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
    <MudaPortaVue></MudaPortaVue>
    <!-- <Usuario></Usuario> -->
  </main>
</template>

<style>
/* Onde ficará o código CSS */
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

header {
  line-height: 1.5;
} */
</style>
