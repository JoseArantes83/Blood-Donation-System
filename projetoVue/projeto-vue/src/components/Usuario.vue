<script setup>
const nome = 'José';
</script>

<template>
    <div>
        <form class="formulario">
            <label for="nome">Nome:</label><br>
            <input type="text" name="nome" id="nome" v-model="nome"><br>
        </form>
    </div>

    <p>{{ nome }}</p>
</template>

<style scoped>
p {
    text-align: center;
}

.formulario {
    margin: 0 auto;
    padding: 5px;
    width: 200px;
    background-color: darkcyan;
}
</style>