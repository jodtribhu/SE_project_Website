<template>
    <div>
        <h1>Register</h1>
        <input type="email" name="email" placeholder="email" v-model="email">
        <br>
        <input type="password" name="password" placeholder="password" v-model="password">
        <br>
        <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticateService from '@/services/AuthenticationService';
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async register(){
            console.log("Button Was clicked the email is "+this.email+" "+this.password);
            const response= await AuthenticateService.register({
                email:this.email,
                password:this.password
            })
            console.log(response.data);
        }
    }
}
</script>

<style scoped>

</style>