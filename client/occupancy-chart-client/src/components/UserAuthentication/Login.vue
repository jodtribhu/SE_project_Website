<template>
    <div>
        <h1>Login</h1>
        <input type="email" name="email" placeholder="email" v-model="email">
        <br>
        <input type="password" name="password" placeholder="password" v-model="password">
        <br>
        <div>
            <p class="error" v-if="error!=''">{{error}}</p>
        </div>
        <button @click="login">Login</button>
    </div>
</template>

<script>
import AuthenticateService from '@/services/AuthenticationService';
export default {
    data(){
        return{
            email:'',
            password:'',
            error:''
        };
    },
    methods:{
        async login(){
            console.log("Button Was clicked the email is "+this.email+" "+this.password);
            try {
                const response =await AuthenticateService.login({
                email:this.email,
                password:this.password
            })
            console.log(response.data);
            this.$store.dispatch('setUser',response.data);
            console.log("Inside response data "+response.data.isAdmin);
            if(response.data.isAdmin==true)
            {
                console.log("It is true that the logged in is Admin");
                this.$router.replace('/admin');
            }
            } catch (error) {
                   console.log("The error is "+ error);
                   this.error=error.response.data.error;      
            }
            
        
        }
    }
}
</script>

<style scoped>
.error{
    color: red;
}
</style>