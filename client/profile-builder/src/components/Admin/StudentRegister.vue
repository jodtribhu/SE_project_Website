<template>
    <div class="main-block">
        <h1>Add a new Student </h1>
        <label id="icon" for="name"><i class="fas fa-user"></i></label>
        <input type="text" name="student_roll_no" placeholder="Student Roll Number" v-model="studentRollNo" autocomplete="new-password">
        <br>
        <label id="icon" for="name"><i class="fas fa-key"></i></label>
        <input  name="student_token" placeholder="Student Token" v-model="student_token" autocomplete="new-password">
        <br>
        <div>
            <p class="error" v-if="error!=''">{{error}}</p>
        </div>
        <div class='btn-block'>
        <button @click="registerStudent">Register</button>
        </div>
    </div>
</template>
<script>
import RegisterStudent from '@/services/RegisterStudent';
export default {
    data(){
        return{
            studentRollNo:'',
            student_token:'',
            error:''
        }
    },
    methods:{
        async registerStudent(){
            console.log("Button Was clicked the email is "+this.studentRollNo+" "+this.student_token);
            try {
                  const response =await RegisterStudent.registerStudent({ studentRollNo:this.studentRollNo,student_token:this.student_token})
                  if(response.data.registration=="Successfull"){
                      this.$router.replace({name: 'admin', params: { load: "Student" }});
                  }
                console.log(response);
            } catch (error) {
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
.main-block {
    max-width: 340px; 
    min-height: 340px; 
    padding: 10px 0;
    margin: auto;
    border-radius: 5px; 
    border: solid 1px #ccc;
    box-shadow: 1px 2px 5px rgba(0,0,0,.31); 
    background: #ebebeb; 
    }

    body, div, h1, form, input, p { 
    padding: 0;
    margin: 0;
    outline: none;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    color: #666;
    test-align:center;
    }
    h1 {
    padding: 10px 0;
    font-size: 32px;
    font-weight: 300;
    text-align: center;
    }
    p {
    font-size: 12px;
    }
    hr {
    color: #a9a9a9;
    opacity: 0.3;
    }
</style>