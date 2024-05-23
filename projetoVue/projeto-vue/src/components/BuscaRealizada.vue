<script>
// import axios from "axios";
import useVuelidate from "@vuelidate/core";
import {
    required,
} from "@vuelidate/validators";

export default {
    name: "BuscaRealizada",
    props: ['dadosBusca'],
    // setup() {
    //     // Essa propriedade é de fundamental importância, pois é com ela que consigo usar o v$ para validações.
    //     return { v$: useVuelidate() };
    // },
    // data() {
    //     return {
    //         userData: {
    //             codigo: "",
    //             nome: "",
    //             cpf: "",
    //             contato: "",
    //             tipoSanguineo: "",
    //             rh: "",
    //         },
    //     };
    // },
    // validations: {
    //     userData: {
    //     },
    // },
    // methods: {
    //     enviarCadastroDoador() {
    //         this.v$.$touch();
    //         if (this.v$.$invalid) {
    //             alert("Há campos com valores inválidos! Tente novamente.");
    //         } else {
    //             fetch("http://localhost:3000/doador/query", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     codigo: this.userData.codigo,
    //                     nome: this.userData.nome,
    //                     cpf: this.userData.cpf,
    //                     contato: this.userData.contato,
    //                     tipoSanguineo: this.userData.tipoSanguineo,
    //                     rh: this.userData.rh,
    //                 }),
    //             })
    //                 .then((response) => response.json())
    //                 .then((data) => {
    //                     // Aqui você pode processar a resposta do servidor
    //                     // Por exemplo, exibir os dados recebidos
    //                     this.userData.tudo = data;
    //                     console.log(data);
    //                 });
    //         }
    //     },
    // },
};
</script>

<template>
    <!-- <BuscaRealizada :dadosBusca="dadosBusca.dadosDadosBusca" /> -->
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
                <td><button type="submit">Alterar</button></td>
                <td><button type="submit">Remover</button></td>
            </tr>
        </tbody>
    </table>
    <br />
    <button>Voltar</button>

    <!-- <h1>{{ dadosBusca }}</h1> -->
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
