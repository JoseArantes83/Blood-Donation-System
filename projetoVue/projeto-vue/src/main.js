import { createApp } from "vue";
import { useVuelidate } from "@vuelidate/core";
import App from "./App.vue";
// import NavBar from './components/NavBar.vue';

const app = createApp(App);

app.use(useVuelidate);
app.mount("#app");

// const app = createApp(App);
// app.component("NavBar", NavBar);
// app.mount('#app');
