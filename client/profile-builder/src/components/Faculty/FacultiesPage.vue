<template>
    <div >
        <user-header></user-header>
        <div class="bellowzindex">
          <h1>Welcome to faculty page</h1>
            <ul>
            <li v-for="facultyprofile in allFacultyProfiles" :key="facultyprofile._id">{{facultyprofile}}</li>
           </ul>
        </div>
        
    </div>
    
</template>
<script>
export default {
    created() {
    this.loadAllfacultyProfiles();
  },
    computed:{
          allFacultyProfiles(){
            let allfacultyprofiles = this.$store.getters['allFacultyProfiles'];
            console.log("Inside all faculty Profiels");
            console.log(allfacultyprofiles);
            return allfacultyprofiles;
        },
    },
    methods: {
    async loadAllfacultyProfiles()
    {
      try {
        await this.$store.dispatch("loadallfacultyprofiles");
        
      } catch (error) {
        this.error = error.message || "Something went wrong";
      }
    },
    }
}
</script>

<style scoped>
.bellowzindex{
   position: absolute;
  width: 100%;
  top: 100px;
  z-index:-999;
}
</style>