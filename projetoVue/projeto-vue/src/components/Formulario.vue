<script>
import axios from 'axios';

const DadosFormulario = {
    data() {
        return {
            nome: '',
            idade: '',
            casado: '',
            areaAtuacao: '',
            sexo: '',
        };
    },
    methods: {
        async enviarFormulario() {
            try { // Tinha esquecido de colocar a rota correta, que é a do back-end http://localhost:3000
                const response = await axios.post('http://localhost:3000/formulario', {
                    nome: this.nome,
                    idade: this.idade,
                    casado: this.casado,
                    areaAtuacao: this.areaAtuacao,
                    sexo: this.sexo,
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
};

export { DadosFormulario };
</script>

<template>
    <div class="container">
        <form @submit.prevent="enviarFormulario">
            <fieldset>
                <legend>Dados de Usuário</legend>
                <label for="nome">Nome:</label>
                <input v-model="nome" type="text" id="nome" placeholder="Nome"><br>
                <label for="idade">Idade:</label>
                <input v-model="idade" type="number" id="idade" placeholder="Idade"><br>
                <label for="casado">Casado?</label>
                <input v-model="casado" type="checkbox" id="casado"><br>
                <label for="areaAtuacao">Área de Atuação:</label>
                <select v-model="areaAtuacao" name="areaAtuacao" id="areaAtuacao">
                    <option value="cienciasHumanas">Ciências Humanas</option>
                    <option value="cienciasExatas">Ciências Exatas</option>
                    <option value="cienciasBiologicas">Ciências Biológicas</option>
                    <option value="Outra">Outra</option>
                </select><br>
                <label for="feminino">Sexo:</label><br>
                <input v-model="sexo" type="radio" name="sexo" id="feminino" value="feminino">
                <label for="feminino">Feminino</label><br>
                <input v-model="sexo" type="radio" name="sexo" id="masculino" value="masculino">
                <label for="masculino">Masculino</label><br><br>
                <button type="submit">Enviar Dados</button>
            </fieldset>
        </form>
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
</style>