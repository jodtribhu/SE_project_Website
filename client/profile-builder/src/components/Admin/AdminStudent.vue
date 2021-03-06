<template>
    <div >
    <h1>Students</h1>
    <base-card>
    <button  @click="registerStudent">Register a new Student</button>
    <p v-for="student in students" :key="student.studentRollNo">
    <student-item  @messageFromStudentChild="childMessageRecieved"  :rollno=student.studentRollNo :created_at=student.created_at :token=student.student_token></student-item> 
    </p>
    </base-card>
    </div>
    
</template>

<script>
import StudentItem from './StudentItem.vue';
export default {
    components: { StudentItem },
    computed:{
        students(){
            const students = this.$store.getters['students'];
            return students;
        }
    },
    created() {
    this.loadstudents();
    this.checkupdateStudents();
    },
     unmounted(){
      this.deregisterStudentSSE()
    },
    methods:{
       async deregisterStudentSSE(){
        try {
              await this.$store.dispatch('deregisterStudentSSE');
                } 
        catch (error) {
              this.error = error.message || 'Something went wrong';
                }
      },
        async checkupdateStudents(){
            try {
                await this.$store.dispatch('checkupdatestudents');
                } 
            catch (error) {
                this.error = error.message || 'Something went wrong';
                }
        },
      childMessageRecieved(message){
          if(message=="valueChanged"){
            this.loadstudents();
          }
        },
        async loadstudents(){
            try {
                await this.$store.dispatch('loadstudents');
                } 
            catch (error) {
                this.error = error.message || 'Something went wrong';
                }
        },
        registerStudent(){
            this.$router.push('/admin/registerStudent');
        }

    }
}
</script>

<style scoped>
 
  html {
  font-family: "Roboto", sans-serif;
  background-color: #ffffff;
}
button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  margin-left:65%;
  font-family: 'Montserrat', sans-serif;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
h1{
    font-family: 'Montserrat', sans-serif;
    text-align: center;
}
</style>