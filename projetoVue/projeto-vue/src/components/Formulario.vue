<script>
import axios from "axios";

export default {
    data() {
        return {
            nome: '',
            idade: 'não informado',
            casado: false,
            areaAtuacao: 'não informado',
            sexo: 'não informado',
            tudo: {},
            // enum: {
            //     1: 'v1',
            //     2: 'v2',
            //     3: 'v3',
            //     4: 'v4',
            //     5: 'v5',
            // },
        };
    },
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
    methods: {
        enviarFormulario() {
            fetch('http://localhost:3000/formulario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: this.nome,
                    idade: this.idade,
                    casado: this.casado,
                    areaAtuacao: this.areaAtuacao,
                    sexo: this.sexo,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    // Aqui você pode processar a resposta do servidor
                    // Por exemplo, exibir os dados recebidos
                    this.tudo = data;
                    console.log(data);
                });
        },
        // getEnumString(value) {
        //     return this.enum[value] || 'valor desconhecido';
        // },
    },
};
</script>

<template>
    <form @submit.prevent="enviarFormulario">
        <fieldset>
            <legend>Dados de Usuário</legend>
            <label for="nome">Nome:</label>
            <input v-model="nome" type="text" id="nome" placeholder="Insira seu nome" autofocus /><br />
            <label for="idade">Idade:</label>
            <input v-model="idade" type="number" id="idade" placeholder="Insira sua idade" /><br />
            <label for="casado">Casado?</label>
            <input v-model="casado" type="checkbox" id="casado" /><br />
            <label for="areaAtuacao">Área de Atuação:</label>
            <select v-model="areaAtuacao" name="areaAtuacao" id="areaAtuacao">
                <option value="cienciasHumanas">Ciências Humanas</option>
                <option value="cienciasExatas">Ciências Exatas</option>
                <option value="cienciasBiologicas">Ciências Biológicas</option>
                <option value="Outra">Outra</option>
            </select><br />
            <label for="feminino">Sexo:</label><br />
            <input v-model="sexo" type="radio" name="sexo" id="feminino" value="feminino" />
            <label for="feminino">Feminino</label><br />
            <input v-model="sexo" type="radio" name="sexo" id="masculino" value="masculino" />
            <label for="masculino">Masculino</label><br /><br />
            <button type="submit">Enviar Dados</button>
        </fieldset>
    </form>
    <br>
    <div id="dadosRecebidos">
        <h2>Dados Recebidos:</h2>
        <ul>
            <li>Nome: {{ tudo.nome }}</li>
            <li>Idade: {{ tudo.idade }}</li>
            <li>Casado: {{ tudo.casado }}</li>
            <li>Área de Atuação: {{ tudo.areaAtuacao }}</li>
            <li>Sexo: {{ tudo.sexo }}</li>
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
</style>
