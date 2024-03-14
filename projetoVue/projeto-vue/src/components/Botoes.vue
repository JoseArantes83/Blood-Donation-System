<script>
import axios from 'axios'; // Axios é uma biblioteca usada para fazer requisições http em aplicações Vue.js

const DadosBotoes = {
    data() {
        return {
            message: '',
            message2: '',
            message3: ''
        };
    },
    methods: {
        getTeste1() {
            axios.get('http://localhost:3000/teste1')
                .then(response => { // Método chamado quando a requisição é bem-sucedida.
                    this.message = response.data;
                })
                .catch(error => { // Método chamado quando a requisição não é bem-sucedida.
                    console.error(error);
                });
        },
        getTeste2() {
            const num = document.getElementById('input').value;

            axios.get(`http://localhost:3000/teste2/${num}`)
                .then(response => {
                    this.message2 = response.data;
                }).catch(error => {
                    console.error(error);
                });
        },
        getTeste3() {
            const val = document.getElementById('valor').value;
            const qtd = document.getElementById('quantidade').value;

            axios.get('http://localhost:3000/teste3', {
                params: {
                    valor: val,
                    quantidade: qtd
                }
            }).then(response => {
                this.message3 = response.data;
            }).catch(error => {
                console.error(error);
            });
        }
    }
}

export { DadosBotoes };
</script>

<template>
    <div class="container">
        <form action="" method="post">
            <div class="field">
                <!-- <button @click="mudaDePorta">Clique aqui para mudar de porta</button> -->
                <button @click="getTeste1">Teste1</button>
                <p>{{ message }}</p><br>
            </div>
            <div class="field">
                <label for="input">Valor:</label>
                <input type="number" id="input" /><br>

                <button @click="getTeste2">Teste2</button>
                <p>{{ message2 }}</p><br>
            </div>
            <div class="field">
                <label for="valor">Valor:</label>
                <input type="number" id="valor" /><br>
                <label for="quantidade">Quantidade:</label>
                <input type="number" id="quantidade" /><br>

                <button @click="getTeste3">Teste3</button>
                <p>{{ message3 }}</p>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.field {
    background-color: lightblue;
}
</style>