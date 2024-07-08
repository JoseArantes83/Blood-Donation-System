<script>
import Modal from './Modal.vue';
import DoacaoService from '@/services/DoacaoService';

export default {
    name: "BuscaDoacoes",
    data() {
        return {
            buscou: false,
            buscou_por_data: false,
            dataRange: {
                dataInicio: "",
                dataFim: ""
            },
            doacoesBuscadas: Object,
        };
    },
    components: { Modal },
    methods: {
        enviarBuscaDoacoes(){
            DoacaoService.buscarDoacoesByFilter().then(data => {
                this.doacoesBuscadas = data;
                this.buscou = true;
                this.buscou_por_data = false;
                console.log("Dados da busca: " + data);
            });
        },
        enviarBuscaPorData(dataRange){
            DoacaoService.buscarDoacoesByFilter(dataRange).then(data => {
                this.doacoesBuscadas = data;
                this.buscou_por_data = true;
                this.buscou = false;
            });
        }
    }
}


</script>

<template>
    <div>
       <button @click="enviarBuscaDoacoes" class="button">Buscar</button>
       <button @click="enviarBuscaPorData" class="button">Buscar por Data</button>
       <div v-if="buscou">
       <h2> Lista de Doacoes </h2>
       <table border="1" class="lista">
        <thead>
            <tr>
                <th>Codigo</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Volume</th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="item in doacoesBuscadas" :key="item.codigo">
            <td class="codigo-col">{{ item.codigo }}</td>
			<td>{{ item.data }}</td>
			<td>{{ item.hora }}</td>
			<td>{{ item.volume }}</td> 
        </tr>
        </tbody>
       </table>
    </div>
    </div>
</template>

<style lang="scss" scoped>

.lista {
	background-color: white;
	border-collapse: collapse;
	text-align: center;
	/* Centraliza o texto dentro das células */
}

.lista th,
.lista td {
	padding: 8px;
	vertical-align: middle;
}

.lista th {
	background-color: lightblue;
	font-weight: bold;
}

.codigo-col {
	background-color: lightblue;
	font-weight: bold;
}

.button {
	padding: 10px;
	font-size: medium;
	border-style: solid;
	border-width: 1px;
}
</style>