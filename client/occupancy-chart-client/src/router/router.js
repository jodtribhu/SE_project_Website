import {createRouter,createWebHistory} from 'vue-router';
import Register from '../components/UserAuthentication/Register.vue';
import Login from '../components/UserAuthentication/Login.vue';
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/register',component:Register},
        {path:'/login',component:Login}
       //any other route
    ]
});

export default router;