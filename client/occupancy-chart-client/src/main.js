import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js';
import store from './store/index.js';
import BaseCard from './components/layout/BaseCard.vue';
const app=createApp(App);
app.component('base-card',BaseCard);
app.use(router);
app.use(store);
app.mount('#app');

