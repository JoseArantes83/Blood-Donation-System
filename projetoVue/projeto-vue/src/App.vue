<script>
// Onde fica o código JS e TS
import CadastroDoador from "./components/CadastroDoador.vue";
import BuscaDoador from "./components/BuscaDoador.vue";
import TelaInicial from "./components/TelaInicial.vue";

export default {
	components: {
		TelaInicial,
		CadastroDoador,
		BuscaDoador,
	},
};
</script>

<template>
	<header></header>

	<main>
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
