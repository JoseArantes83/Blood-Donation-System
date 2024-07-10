<script>
import useVuelidate from '@vuelidate/core';
import DoacaoService from '@/services/DoacaoService';
import { required } from '@vuelidate/validators';

export default {
    name: "BuscaDoacoes",
    setup() {
        return { v$: useVuelidate() };
    },
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
    validations: {
        dataRange: {
            dataInicio: { required },
            dataFim: { required },
        }
    },
    methods: {
        enviarBuscaPorData() {
            this.v$.$touch();
            if (this.v$.$invalid) {
                alert("Preencha as datas para realizar a busca! Tente novamente.")
            } else {
                DoacaoService.buscarDoacoesByFilter(this.dataRange).then(data => {
                this.doacoesBuscadas = data;
                this.buscou = true;
            });
            }
        },
        goToTelaInicial() {
            this.$router.push('/telainicial');
        }
    }
}


</script>

<template>
    <button @click="goToTelaInicial" class="button">Voltar</button>
    <div class="doacoes-buscadas">
        <h2> Lista de Doações por Intervalo de Data </h2>
        <form @submit.prevent="enviarBuscaPorData()">
            <fieldset>
                <label for="dataInicial">Data Inicial:</label>
                <input v-model="dataRange.dataInicio" type="date" id="dataInicial" placeholder="Insira uma data inicial" autofocus> <br>
                <label id="erro" v-if="v$.dataRange.dataInicio.$error">Este é um campo obrigatório!</label><br />
                <br>
                <label for="dataFinal">Data Final:</label>
                <input v-model="dataRange.dataFim" type="date" id="dataFinal" placeholder="Insira uma data final" autofocus> <br>
                <label id="erro" v-if="v$.dataRange.dataFim.$error">Este é um campo obrigatório!</label><br />
                <br>
                <button type="submit" class="button">Buscar</button>
            </fieldset>
        </form>
       <div v-if="buscou">
       <table border="1" class="lista">
        <thead>
            <tr>
                <th>Codigo</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Volume</th>
                <th>Doador</th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="item in doacoesBuscadas" :key="item.codigo">
            <td class="codigo-col">{{ item.codigo }}</td>
			<td>{{ item.data }}</td>
			<td>{{ item.hora }}</td>
			<td>{{ item.volume }}</td> 
            <td>{{ item.doador.nome }}</td>
        </tr>
        </tbody>
       </table>
    </div>
    </div>
</template>

<style lang="scss" scoped>

.doacoes-buscadas {
	display: flex;
	align-items: center;
	flex-direction: column;

	input {
		min-width: 20vmin;
	}
}

fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightblue;
}

#erro {
	color: red;
	font-style: italic;
}

.lista {
	background-color: lightblue;
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