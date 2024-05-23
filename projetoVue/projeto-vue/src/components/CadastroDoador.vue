<script>
// import axios from "axios";
import useVuelidate from "@vuelidate/core";
import {
    required,
} from "@vuelidate/validators";

export default {
    name: "CadastroDoador",
    setup() {
        // Essa propriedade é de fundamental importância, pois é com ela que consigo usar o v$ para validações.
        return { v$: useVuelidate() };
    },
    data() {
        return {
            userData: {
                nome: "",
                cpf: "",
                contato: "",
                tipoSanguineo: "",
                rh: "",
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
    validations: { // ATUALIZAR VALIDAÇÕES!!!
        userData: {
            nome: { required },
            cpf: { required },
            contato: { required },
            tipoSanguineo: { required },
            rh: { required },
        },
    },
    methods: {
        enviarCadastroDoador() {
            this.v$.$touch();
            if (this.v$.$invalid) {
                alert("Há campos com valores inválidos! Tente novamente.");
            } else {
                fetch("http://localhost:3000/doador", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
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
                        // Por exemplo, exibir os dados recebidos
                        this.userData.tudo = data;
                        console.log(data);
                    });
            }
        },
    },
};
</script>

<template>
    <form @submit.prevent="enviarCadastroDoador">
        <fieldset>
            <label for="nome">Nome:</label>
            <input v-model="userData.nome" type="text" id="nome" placeholder="Insira seu nome" autofocus />
            <label id="erro" v-if="v$.userData.nome.$error">Valor inválido!</label><br />

            <label for="cpf">CPF:</label>
            <input v-model="userData.cpf" type="text" id="cpf" placeholder="Insira seu CPF" />
            <label id="erro" v-if="v$.userData.cpf.$error">Valor inválido!</label><br />

            <label for="contato">Contato:</label>
            <input v-model="userData.contato" type="text" id="contato" placeholder="Insira seu contato" autofocus />
            <label id="erro" v-if="v$.userData.contato.$error">Este é um campo obrigatório!</label><br />

            <label>Tipo Sanguíneo:</label>
            <label id="erro" v-if="v$.userData.tipoSanguineo.$error">Este é um campo obrigatório!</label><br />
            <input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="a" value="a" />
            <label for="a">A</label><br />
            <input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="b" value="b" />
            <label for="b">B</label><br />
            <input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="ab" value="ab" />
            <label for="ab">AB</label><br />
            <input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="o" value="o" />
            <label for="o">O</label><br /><br />

            <label>RH:</label>
            <label id="erro" v-if="v$.userData.rh.$error">Este é um campo obrigatório!</label><br />
            <input v-model="userData.rh" type="radio" name="rh" id="positivo" value="positivo" />
            <label for="positivo">+ (positivo)</label><br />
            <input v-model="userData.rh" type="radio" name="rh" id="negativo" value="negativo" />
            <label for="negativo">- (negativo)</label><br /><br />

            <button type="submit">Cadastrar</button>
        </fieldset>
    </form>
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
