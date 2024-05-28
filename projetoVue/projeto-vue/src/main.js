// main.js
import { createApp } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(useVuelidate);
app.use(router);
app.mount('#app');
