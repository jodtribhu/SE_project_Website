import {createRouter,createWebHistory} from 'vue-router';
import AdminRegister from '../components/Admin/AdminRegister.vue';
import Login from '../components/UserAuthentication/Login.vue';
import Admin from '../components/Admin/Admin.vue';
import NotFound from '../components/pages/NotFound.vue';
import TeacherContact from '../components/Teachers/TeacherContact.vue';
import TeacherDetail from '../components/Teachers/TeacherDetail.vue';
import TeacherRequest from '../components/Teachers/TeacherRequest.vue';
import StudentRegister from '../components/Admin/StudentRegister.vue';



import store from '../store/index.js'
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/login'},
        {path:'/admin/register',component:AdminRegister,meta:{ requiresAuth:true}},
        
        {path:'/admin/registerStudent',component:StudentRegister,meta:{ requiresAuth:true}},

    

        {path:'/login',component:Login,meta:{ requiresUnauth:true}},
        {path:'/teachers',component:null},
        {path:'/teachers/:id',component:TeacherDetail,children:[
            {path:'/contact',component:TeacherContact} //teachers/1/contact
        ]},
        {path:'/requests',component:TeacherRequest},
        {path:'/admin',component:Admin,meta:{ requiresAuth:true}},
        {path:'/:notFound(.*)',component:NotFound}, //any other route
       //any other route
    ]
});
router.beforeEach(function(to,_,next){
    if(to.meta.requiresAuth && !store.getters.isAuthenticated)
    {
        next('/login');
    }
    else if(to.meta.requiresUnauth && store.getters.isAuthenticated)
    {
        next('/admin');
    }
    else
    {
        next()
    }
 });
export default router;