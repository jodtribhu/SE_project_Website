<template>
    <div >
    <base-card>
    <button @click="registerStudent">Register a new Student</button>
        <ul>
            <ul v-for="student in students" :key="student.studentRollNo">
                <li >Student Roll Number: {{student.studentRollNo}}</li>
                <li >Student Token: {{student.student_token}}</li>
            </ul>
        </ul>
    </base-card>
    </div>
    
</template>

<script>
export default {
    computed:{
        students(){
            const students = this.$store.getters['students'];
            return students;
        }
    },
    created() {
    this.loadstudents();
    },
    methods:{
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
</style>