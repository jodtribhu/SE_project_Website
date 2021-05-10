<template>
    <div >
        <user-header ></user-header>
        <div class="bellowzindex">
         <base-card>
            <h1>Find your faculty.</h1>
            <div class='search-bar'>
                  <input type="text" class='mainbar input' placeholder="Search">
                  <input type="text" class="locationbar input" placeholder="Location">
              </div>
              <div class="filters">
                <input type="button" id="publications" class="filter-btn" value="Publication"  />
                <input type="button" id="project" class="filter-btn" value="Project" />
                <input type="button" id="skills" class="filter-btn" value="Skills" />
                <input type="button" id="availability" class="filter-btn" value="Available for project" />
                <div class="department-section">
                    <select name="department" class="department input" id="department">
                        <option value="none" selected disabled hidden>Department</option>
                        <option value="cse">CSE</option>
                        <option value="ece">ECE</option>
                        <option value="mech">Mechanical</option>
                        <option value="civil">Civil</option>
                        <option value="eee">EEE</option>
                        <option value="eie">EIE</option>
                    </select>
                  </div>
              </div>
          </base-card>
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

/*Yadhu*/
h1{
  text-align: center;
}
.mainspace{
    width:60%;
    border-radius: 20px 20px;
    background-color: white;
    font-family: "Nunito Sans", sans-serif;
}
.search-bar{
     display:flex;
      padding-bottom:1rem;
}
.input{
    height: 35px;
    border-radius:20px 20px;
    font-family: "Nunito Sans", sans-serif;
    font-size: 1rem;
    border-width:1px
}
.input:focus{
    outline: none;
}
::placeholder{
    padding: 0 10px;
    font-family: "Nunito Sans", sans-serif;
    font-size: 1rem;
}
.mainbar{
    width: 35%;
    margin-right: 25px;
}
.locationbar{
    width:35%
}
.department{
    padding-left:1.5rem;
    padding-right:1.5rem;
    height: 40px;
}
.filter-btn{
    border-radius: 20px 20px;
    margin-right:0.2rem;
    height: 40px;
    color: grey;
    padding-left:1.5rem;
    padding-right:1.5rem;
    font-family: "Nunito Sans", sans-serif;
    background-color: white;
    font-weight: bold;
    font-size: 1rem;
    border-width: 1px;
  

}

.filters{
  display:flex;

}


</style>