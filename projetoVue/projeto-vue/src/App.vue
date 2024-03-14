<script>// Onde fica o código JS e TS
import Botoes from './components/Botoes.vue';
import Formulario from './components/Formulario.vue';

export default {
  components: {
    Botoes,
    Formulario
  }
};
</script>

<template> <!-- Onde ficará o HTML -->
  <header>
  </header>

  <main>
    <Formulario />
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
