import {createRouter,createWebHistory} from 'vue-router';
import AdminRegister from '../components/Admin/AdminRegister.vue';
import Login from '../components/UserAuthentication/Login.vue';
import Admin from '../components/Admin/Admin.vue';
import NotFound from '../components/pages/NotFound.vue';
// import FacultyContact from '../components/Faculty/FacultyContact.vue';
import FacultyProfile from '../components/Faculty/FacultyProfile.vue';
import FacultiesPage from '../components/Faculty/FacultiesPage.vue';
// import FacultyRequest from '../components/Faculty/FacultyRequest.vue';
import StudentRegister from '../components/Admin/StudentRegister.vue';

import ForgotPassword from '../components/UserAuthentication/ForgotPassword.vue';


import store from '../store/index.js'
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/faculties'},
        {path:'/admin/register',component:AdminRegister,meta:{ requiresAuth:true, title: 'Admin' }},
        
        {path:'/admin/registerStudent',component:StudentRegister,meta:{ requiresAuth:true}},

        {path:'/ForgotPassword',component:ForgotPassword},

        {path:'/login',component:Login,meta:{ requiresUnauth:true}},
        {path:'/faculties',component:FacultiesPage},
        {path:'/faculties/:id',component:FacultyProfile},
        // {path:'/requests',component:TeacherRequest},
        {path:'/admin',name: 'admin',component:Admin,meta:{ requiresAuth:true,title: 'Admin'}},
        {path:'/:notFound(.*)',component:NotFound}, //any other route
       //any other route
    ]
});
router.beforeEach(function(to,_,next){
    if(to.meta.title)
    {
        document.title = to.meta.title || 'Profile Builder';

    }
    else
    {
        document.title = 'Profile Builder';
    }
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