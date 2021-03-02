<template>
    <div>
  
        <div class="box">
            <h1>Login</h1>
                <input type="email" name="email" placeholder="Email" v-model="email">
                <input type="password" name="password" placeholder="Password" v-model="password">
            <div>
            <p class="error" v-if="error!=''">{{error}}</p>
            </div>
            <button @click="login">Login</button>
        </div> 
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
            console.log(response);
            this.$store.dispatch('setUser',response.data);

                if(response.data.isAdmin==true)
                {
                console.log("It is true that the logged in is Admin");
                this.$router.replace('/admin');
                }
            } catch (error) {
                   console.log("The error is "+ error.response.data.errormessage);
                   this.error=error.response.data.errormessage;      
            }
            
        
        }
    }
}
</script>

<style scoped>
.error{
    color: #a75864;
}
.box{
  border-radius: 5%;
  width: 300px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #383e56;
  text-align: center;
}
.box h1{
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}
.box input[type = "email"],.box input[type = "password"]{
  border:0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}
.box input[type = "email"]:focus,.box input[type = "password"]:focus{
  width: 280px;
  border-color: #2ecc71;
}
.box button{
  border:0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}
.box button:hover{
  background: #2ecc71;
}


</style>