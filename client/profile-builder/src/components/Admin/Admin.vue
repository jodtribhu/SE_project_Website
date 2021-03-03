<template>
    <div >
    <admin-sidebar @messageFromChild="childMessageRecieved"></admin-sidebar>
    <admin-student v-if="gotoComponent=='Student'"></admin-student>
    <admin-faculty v-if="gotoComponent=='Faculty'"></admin-faculty>
    </div>
    
</template>

<script>
import AdminSidebar from './AdminSidebar.vue';
import AdminStudent from './AdminStudent.vue';
import AdminFaculty from './AdminFaculty.vue';
export default {
  components: { AdminSidebar,AdminFaculty,AdminStudent },
  data(){
      return{
          gotoComponent:'Faculty'
      }
  },
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
        childMessageRecieved(message){
           this.gotoComponent=message
        },
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
            this.$router.push('/admin/register');
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