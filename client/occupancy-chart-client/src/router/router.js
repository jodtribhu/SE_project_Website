import {createRouter,createWebHistory} from 'vue-router';
import Register from '../components/Register.vue';
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/register',component:Register}
       //any other route
    ]
});

export default router;