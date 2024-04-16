<script>
// import axios from "axios";
import useVuelidate from "@vuelidate/core";
import {
    required,
    minLength,
    maxLength,
    minValue,
    maxValue,
} from "@vuelidate/validators";

export default {
    setup() {
        // Essa propriedade é de fundamental importância, pois é com ela que consigo usar o v$ para validações.
        return { v$: useVuelidate() };
    },
    data() {
        return {
            userData: {
                nome: "",
                idade: "",
                casado: false,
                areaAtuacao: "",
                sexo: "",
                tudo: {},
                // enum: {
                //     1: 'v1',
                //     2: 'v2',
                //     3: 'v3',
                //     4: 'v4',
                //     5: 'v5',
                // },
            },
        };
    },
    validations: {
        userData: {
            nome: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(255),
            },
            idade: {
                required,
                minValue: minValue(0),
                maxValue: maxValue(10000),
            },
            casado: { required },
            areaAtuacao: { required },
            sexo: { required },
        },
    },
    methods: {
        enviarFormulario() {
            this.v$.$touch();
            if (this.v$.$invalid) {
                alert("Há campos com valores inválidos! Tente novamente.");
            } else {
                fetch("http://localhost:3000/formulario", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nome: this.userData.nome,
                        idade: this.userData.idade,
                        casado: this.userData.casado,
                        areaAtuacao: this.userData.areaAtuacao,
                        sexo: this.userData.sexo,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        // Aqui você pode processar a resposta do servidor
                        // Por exemplo, exibir os dados recebidos
                        this.userData.tudo = data;
                        console.log(data);
                    });
            }
        },
        // getEnumString(value) {
        //     return this.enum[value] || 'valor desconhecido';
        // },

        // enviarFormulario() {
        //     fetch('http://localhost:3000/formulario', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             nome: this.userData.nome,
        //             idade: this.userData.idade,
        //             casado: this.userData.casado,
        //             areaAtuacao: this.userData.areaAtuacao,
        //             sexo: this.userData.sexo,
        //         }),
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             // Aqui você pode processar a resposta do servidor
        //             // Por exemplo, exibir os dados recebidos
        //             this.userData.tudo = data;
        //             console.log(data);
        //         });
        // },
        // methods: {
        //     async enviarFormulario() {
        //         try {
        //             // Tinha esquecido de colocar a rota correta, que é a do back-end http://localhost:3000
        //             const response = await axios.post("http://localhost:3000/formulario", {
        //                 nome: this.nome,
        //                 idade: this.idade,
        //                 casado: this.casado,
        //                 areaAtuacao: this.areaAtuacao,
        //                 sexo: this.sexo,
        //             });
        //             console.log(response.data);
        //         } catch (error) {
        //             console.error(error);
        //         }
        //     },
        // },
    },
};
</script>

<template>
    <form @submit.prevent="enviarFormulario">
        <fieldset>
            <legend>Dados de Usuário</legend>
            <label for="nome">Nome:</label>
            <input v-model="userData.nome" type="text" id="nome" placeholder="Insira seu nome" autofocus />
            <label id="erro" v-if="v$.userData.nome.$error">Valor inválido!</label><br />
            <label for="idade">Idade:</label>
            <input v-model="userData.idade" type="number" id="idade" placeholder="Insira sua idade" />
            <label id="erro" v-if="v$.userData.idade.$error">Valor inválido!</label><br />
            <label for="casado">Casado?</label>
            <input v-model="userData.casado" type="checkbox" id="casado" />
            <label id="erro" v-if="v$.userData.casado.$error">Este é um campo obrigatório!</label><br />
            <label for="areaAtuacao">Área de Atuação:</label>
            <select v-model="userData.areaAtuacao" name="areaAtuacao" id="areaAtuacao">
                <option value="cienciasHumanas">Ciências Humanas</option>
                <option value="cienciasExatas">Ciências Exatas</option>
                <option value="cienciasBiologicas">Ciências Biológicas</option>
                <option value="Outra">Outra</option>
            </select>
            <label id="erro" v-if="v$.userData.areaAtuacao.$error">Este é um campo obrigatório!</label><br />
            <label for="feminino">Sexo:</label>
            <label id="erro" v-if="v$.userData.sexo.$error">Este é um campo obrigatório!</label><br />
            <input v-model="userData.sexo" type="radio" name="sexo" id="feminino" value="feminino" />
            <label for="feminino">Feminino</label><br />
            <input v-model="userData.sexo" type="radio" name="sexo" id="masculino" value="masculino" />
            <label for="masculino">Masculino</label><br /><br />
            <button type="submit">Enviar Dados</button>
            <!-- <button :disabled="v$.$invalid">Submit</button> -->
        </fieldset>
    </form>
    <br />
    <div id="dadosRecebidos">
        <h2>Dados Recebidos:</h2>
        <ul>
            <li>Nome: {{ userData.tudo.nome }}</li>
            <li>Idade: {{ userData.tudo.idade }}</li>
            <li>Casado: {{ userData.tudo.casado }}</li>
            <li>Área de Atuação: {{ userData.tudo.areaAtuacao }}</li>
            <li>Sexo: {{ userData.tudo.sexo }}</li>
        </ul>
    </div>
    <!-- <div v-for="(item, index) in tudo" :key="index">
        {{ getEnum(item.value) }}
    </div> -->
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
