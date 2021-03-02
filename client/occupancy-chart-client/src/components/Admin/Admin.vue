<template>
    <div>
    <h1>Hello TO admin</h1>
    <base-card>
    <button @click="register">Register a new Faculty</button>
        <ul>
            <ul v-for="faculty in faculties" :key="faculty._id">
                <li v-if=!faculty.isAdmin>Faculty Id: {{faculty._id}}</li>
                <li v-if=!faculty.isAdmin>Faculty Email: {{faculty.email}}</li>
            </ul>
        </ul>
    </base-card>
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
        faculties(){
            const faculties = this.$store.getters['faculties'];
            return faculties;
        },
        students(){
            const students = this.$store.getters['students'];
            return students;
        }
    },
    created() {
    this.loadfaculties();
    this.loadstudents();
    },
    methods:{
        async loadfaculties(){
            try {
                await this.$store.dispatch('loadfaculties');
                } 
            catch (error) {
                this.error = error.message || 'Something went wrong';
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
        register(){
            this.$router.replace('/admin/register');
        },
        registerStudent(){
            this.$router.replace('/admin/registerStudent');
        }

    }
}
</script>

<style scoped>

</style>