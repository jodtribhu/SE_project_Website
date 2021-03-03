<template>
    <div>
        <h1>Add a new Student </h1>
        <input type="text" name="student_roll_no" placeholder="Student Roll Number" v-model="studentRollNo" autocomplete="new-password">
        <br>
        <input  name="student_token" placeholder="Student Token" v-model="student_token" autocomplete="new-password">
        <br>
        <div>
            <p class="error" v-if="error!=''">{{error}}</p>
        </div>
        <button @click="registerStudent">Register</button>
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
                      this.$router.push('/admin');
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
</style>