import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js';
import store from './store/index.js';
import BaseCard from './components/layout/BaseCard.vue';
import AdminSidebar from './components/Admin/AdminSidebar.vue';
import TheHeader from './components/layout/TheHeader.vue';
import UserHeader from './components/layout/UserHeader.vue';


const app=createApp(App);
app.component('base-card',BaseCard);
app.component('admin-sidebar',AdminSidebar);
app.component('the-header',TheHeader);
app.component('user-header',UserHeader);

app.use(router);
app.use(store);

app.mount('#app');

