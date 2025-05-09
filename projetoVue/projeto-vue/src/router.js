import { createRouter, createWebHistory } from 'vue-router';
import CadastroDoador from './components/CadastroDoador.vue';
import BuscaDoador from './components/BuscaDoador.vue';
import TelaInicial from './components/TelaInicial.vue';
import BuscaDoacoes from './components/BuscaDoacoes.vue'

const routes = [
	{
		path: '/',
		redirect: '/telainicial'
	},
	{
		path: '/telainicial',
		name: 'TelaInicial',
		component: TelaInicial,
	},
	{
		path: '/cadastrodoador',
		name: 'CadastroDoador',
		component: CadastroDoador,
	},
	{
		path: '/buscadoador',
		name: 'BuscaDoador',
		component: BuscaDoador,
	},
	{
		path: '/buscadoacoes',
		name: 'BuscaDoacoes',
		component: BuscaDoacoes
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
	routes,
});

export default router;