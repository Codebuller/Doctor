import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Dialog from "primevue/dialog";
import router from './router/index';
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import './assets/styles.scss';
const app = createApp(App);


app.use(PrimeVue, {ripple: true})
app.use(router)
app.mount("#app");