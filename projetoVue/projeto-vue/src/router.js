import { createRouter, createWebHistory } from 'vue-router';
import CadastroDoador from './components/CadastroDoador.vue';
import BuscaDoador from './components/BuscaDoador.vue';

const routes = [
    {
        path: '/cadastrodoador',
        name: 'CadastroDoador',
        component: CadastroDoador
    },
    {
        path: '/buscadoador',
        name: 'BuscaDoador',
        component: BuscaDoador
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
    routes
});

export default router;
