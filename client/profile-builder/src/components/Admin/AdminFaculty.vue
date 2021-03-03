<template>
    <div >
    <base-card>
    <button @click="register">Register a new Faculty</button>
        <ul>
            <ul v-for="faculty in faculties" :key="faculty._id">
                <li v-if=!faculty.isAdmin>Faculty Id: {{faculty._id}}</li>
                <li v-if=!faculty.isAdmin>Faculty Email: {{faculty.email}}</li>
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
        }
    },
    created() {
    this.loadfaculties();
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
        register(){
            this.$router.push('/admin/register');
        },
    }
}
</script>

<style scoped>
 
  div {
  text-align: center;
}
</style>