<template>
    <!-- <button @click="mudaDePorta">Clique aqui para mudar de porta</button> -->
    <button @click="getTeste1">Teste1</button>
    <p>{{ message }}</p>

    <input type="number" id="input" /><br>

    <button @click="getTeste2">Teste2</button>
    <p>{{ message2 }}</p>

    <input type="number" id="valor" /><br>
    <input type="number" id="quantidade" /><br>

    <button @click="getTeste3">Teste3</button>
    <p>{{ message3 }}</p>
</template>

<script>
import axios from 'axios'; // Axios é uma biblioteca usada para fazer requisições http em aplicações Vue.js

export default {
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
                .then(response => {
                    this.message = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getTeste2() {
            const num = document.getElementById('input').value;
            axios.get(`http://localhost:3000/teste2/${num}`).then(response => {
                this.message2 = response.data;
            }).catch(error => {
                console.error(error);
            });
        },
        getTeste3() {
            const valor = document.getElementById('valor').value;
            const quantidade = document.getElementById('quantidade').value;
            axios.get('http://localhost:3000/teste3', {
                params: {
                    valor: valor,
                    quantidade: quantidade
                }
            }).then(response => {
                this.message3 = response.data;
            }).catch(error => {
                console.error(error);
            });
        }
    }
}

// export default {
//     data() {
//         return {
//             message: ''
//         };
//     },
//     methods: {
//         fetchTeste1() {
//             axios.get('http://localhost:3000/teste1').then(response => {
//                 this.message = response.data;
//             }).catch(error => {
//                 console.error(error);
//             });
//         }
//     }
// };


// export default {
//     methods: {
//         async mudaDePorta() {
//             try {
//                 const response = await axios.post('http://localhost:5173', {
//                     newUrl: 'http://localhost:3000/teste1'
//                 });
//                 console.log(response.data);
//                 window.location.href = response.data.newUrl;
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//     }
// }
</script>

<style lang="scss" scoped></style>