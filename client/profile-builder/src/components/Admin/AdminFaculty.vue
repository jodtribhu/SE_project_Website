<template>
    <div >
    <h1>Faculty</h1>
    <base-card >
    <button  @click="register">Register a new Faculty</button>
    <p v-for="faculty in faculties" :key="faculty._id">
        <faculty-item  @messageFromChild="childMessageRecieved" v-if="!faculty.isAdmin" :id=faculty._id :email=faculty.email :created_at=faculty.created_at :modified_at=faculty.modified_at ></faculty-item> 
    </p>
    </base-card>
   
    </div>
</template>

<script>
import FacultyItem from './FacultyItem.vue';
export default {
    components: { FacultyItem },
    computed:{
        faculties(){
            const faculties = this.$store.getters['faculties'];
            return faculties;
        }
    },
    created() {
    this.loadfaculties();
    this.checkupdateFaculties();
    },
    unmounted(){
      this.deregisterFacultySSE()
    },
    methods:{
      async deregisterFacultySSE(){
        try {
              await this.$store.dispatch('deregisterFacultySSE');
                } 
        catch (error) {
              this.error = error.message || 'Something went wrong';
                }
      },
        childMessageRecieved(message){
          if(message=="valueChanged"){
            this.loadfaculties();
          }
        },
        async checkupdateFaculties(){
            try {
                await this.$store.dispatch('checkupdatefaculties');
                } 
            catch (error) {
                this.error = error.message || 'Something went wrong';
                }
        },
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

button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  margin-left:60%;
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
}
</style>