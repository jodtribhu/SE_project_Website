<template>
    <div >
        <user-header ></user-header>
        <div class="bellowzindex">
       
          <base-card>
          <h4 class="heading">People</h4>
             <div class="eachpeople" v-for="facultyprofile in allFacultyProfiles" :key="facultyprofile._id">
               <search-item>
                
                <div :style="{ 'background-image': `url(${converturl(facultyprofile.ProfilePhotoPath) })` }"  class="profile-picture" />
                 
                 
               <li class="name">
                 {{facultyprofile.FirstName}} {{facultyprofile.LastName}}  
               </li>
               <li  class="description">
                 {{facultyprofile.Description}}
               </li>
               <li class="city">
                 {{facultyprofile.City}}
               </li>    
                </search-item> 
             </div>
         
        
          </base-card>
            
        </div>
        
    </div>
    
</template>
<script>
import BaseCard from '../layout/BaseCard.vue';
export default {
  components: { BaseCard },
    created() {
    this.loadAllfacultyProfiles();
  },
  data(){
    return{
      serverpath:"http://localhost:8081/upload/ "
    }
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
      converturl(filepath){
        console.log("inside ffffffffffff");
           
              var fileloc="";
              if(filepath!=null)
              {
                var filename = filepath.replace(/^.*[\\]/, '');
              fileloc="http://localhost:8081/upload/"+filename;
              }
              else
              {
                  fileloc="http://localhost:8081/upload/"+"default.png";
              }
               console.log(fileloc);
              return fileloc;
      },
     
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
.profile-picture {
  float: left;
   display: block;
   background-size: cover;
  background-position: center center;
  margin-right: 20px;
  border-radius: 100%;
  height: 80px;
  width: 80px;
  z-index: 1;
 
}
.heading{
  font-size:25px;
   font-family: "Montserrat", sans-serif;
   font-weight: bold;
   color: rgb(58, 50, 50);
}
.name{
  font-size:20px;
  font-weight: bold;
  padding-bottom: 4px;
}
.description{
   font-size:16px;
  font-weight: normal;
  color: rgb(75, 73, 73);
  padding-bottom: 4px;
}
li{
    list-style-type: none;
}
.bellowzindex{
   position: absolute;
  width: 100%;
  top: 100px;
  z-index:-999;
}
</style>