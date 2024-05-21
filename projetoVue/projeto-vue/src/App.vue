<script>
// Onde fica o código JS e TS
import Botoes from "./components/Botoes.vue";
import Formulario from "./components/Formulario.vue";
import CadastroDoador from "./components/CadastroDoador.vue";
import BuscaDoador from "./components/BuscaDoador.vue";

export default {
  components: {
    Botoes,
    CadastroDoador,
    BuscaDoador,
  },
};
</script>

<template>
  <header></header>

  <main>

    <nav>
      <router-link to="/cadastrodoador">Cadastrar doadores</router-link> |
      <router-link to="/buscadoador">Buscar doadores</router-link>

    </nav>
    <router-view />


  </main>
</template>

<style>
* {
  margin: 5px;
  padding: 1px;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
