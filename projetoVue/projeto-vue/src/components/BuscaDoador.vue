<script>
import useVuelidate from "@vuelidate/core";

export default {
    name: "BuscaDoador",
    setup() {
        return { v$: useVuelidate() };
    },
    data() {
        return {
            nao_buscou: true, // booleano para dizer qual template apresentar: tela de busca ou de dados buscados
            userData: {
                codigo: "",
                nome: "",
                cpf: "",
                contato: "",
                tipoSanguineo: "",
                rh: "",
            },
            dadosBusca: Object,
        };
    },
    validations: {
    },
    methods: {
        goToBuscaDoador() {
            this.nao_buscou = true;
        },
        goToTelaInicial() {
            this.$router.push('/telainicial');
        },
        goToBuscaRealizada() {
            this.$router.push('/buscarealizada');
        },
        enviarBuscaDoador() {
            this.v$.$touch();
            if (this.v$.$invalid) {
                alert("Há campos com valores inválidos! Tente novamente.");
            } else {
                fetch("http://localhost:3000/doador/query", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        codigo: this.userData.codigo,
                        nome: this.userData.nome,
                        cpf: this.userData.cpf,
                        contato: this.userData.contato,
                        tipoSanguineo: this.userData.tipoSanguineo,
                        rh: this.userData.rh,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        // Aqui você pode processar a resposta do servidor
                        this.nao_buscou = false;
                        this.dadosBusca = data;
                    });
            }
        },

    },
};
</script>

<template>
    <div v-if="nao_buscou">
        <form @submit.prevent="enviarBuscaDoador">
            <!-- .prevent previne que o form atue de forma padrão e atualize a página com o submit -->
            <fieldset>
                <label for="codigo">Codigo:</label>
                <input v-model="userData.codigo" type="text" id="codigo" placeholder="Insira um código" autofocus />
                <br />
                <!-- <label id="erro" v-if="v$.userData.nome.$error">Valor inválido!</label><br /> -->

                <label for="nome">Nome:</label>
                <input v-model="userData.nome" type="text" id="nome" placeholder="Insira um nome" autofocus />
                <br />
                <!-- <label id="erro" v-if="v$.userData.nome.$error">Valor inválido!</label><br /> -->

                <label for="cpf">CPF:</label>
                <input v-model="userData.cpf" type="text" id="cpf" placeholder="Insira um CPF" />
                <br />
                <!-- <label id="erro" v-if="v$.userData.cpf.$error">Valor inválido!</label><br /> -->

                <label for="contato">Contato:</label>
                <input v-model="userData.contato" type="text" id="contato" placeholder="Insira um contato" autofocus />
                <br />
                <!-- <label id="erro" v-if="v$.userData.contato.$error">Este é um campo obrigatório!</label><br /> -->

                <label>Tipo Sanguíneo:</label>
                <br />
                <!-- <label id="erro" v-if="v$.userData.tipoSanguineo.$error">Este é um campo obrigatório!</label><br /> -->
                <input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="a" value="a" />
                <label for="a">A</label><br />
                <input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="b" value="b" />
                <label for="b">B</label><br />
                <input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="ab" value="ab" />
                <label for="ab">AB</label><br />
                <input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="o" value="o" />
                <label for="o">O</label><br />
                <input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="todos" value="" />
                <label for="todos">Todas as opções</label><br /><br />

                <label>RH:</label>
                <br />
                <!-- <label id="erro" v-if="v$.userData.rh.$error">Este é um campo obrigatório!</label><br /> -->
                <input v-model="userData.rh" type="radio" name="rh" id="positivo" value="positivo" />
                <label for="positivo">+ (positivo)</label><br />
                <input v-model="userData.rh" type="radio" name="rh" id="negativo" value="negativo" />
                <label for="negativo">- (negativo)</label><br />
                <input v-model="userData.rh" type="radio" name="rh" id="todosRh" value="" />
                <label for="todosRh">Todas as opções</label><br />
                <br />
                <button type="submit">Buscar</button>
            </fieldset>
        </form>
        <button @click="goToTelaInicial">Voltar</button>
    </div>
    <div v-else>
        <table border="1">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Contato</th>
                    <th>Tipo Sanguíneo</th>
                    <th>RH</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in dadosBusca" :key="item.codigo">
                    <td>{{ item.codigo }}</td>
                    <td>{{ item.nome }}</td>
                    <td>{{ item.cpf }}</td>
                    <td>{{ item.contato }}</td>
                    <td>{{ item.tipoSanguineo }}</td>
                    <td>{{ item.rh }}</td>
                    <td><button @click="alterar(item)">Alterar</button></td>
                    <td><button @click="remover(item)">Remover</button></td>
                </tr>
            </tbody>
        </table>
        <br />
        <button @click="goToBuscaDoador">Voltar</button>
    </div>
</template>

<style lang="scss" scoped>
legend {
    color: white;
    background-color: rgba(23, 98, 190, 0.9);
    font-weight: bolder;
    padding: 6px 8px 6px 8px;
    border-radius: 4px;
}

fieldset {
    background-color: lightblue;
    border-width: 3px;
    border-radius: 6px;
    padding: 8px;
}

#erro {
    color: red;
    font-style: italic;
}
</style>
