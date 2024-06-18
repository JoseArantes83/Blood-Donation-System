<script>
import { RouterLink } from 'vue-router';

export default {
	name: "TelaInicial",
};
</script>

<template>
	<header></header>

	<main>
		<h1>Menu Principal</h1><br>
		<nav>
			<RouterLink to="/cadastrodoador">Cadastrar doadores</RouterLink> |
			<RouterLink to="/buscadoador">Buscar doadores</RouterLink> |
			<RouterLink to="/buscadoacoes">Buscar doações</RouterLink>
		</nav>
	</main>
</template>

<style scoped>
* {
	margin: 5px;
	padding: 1px;
	box-sizing: border-box;
	font-family: Arial, Helvetica, sans-serif;
	/* align-items: center; */
	text-align: center;
	background-color: lightblue;
}
</style>
