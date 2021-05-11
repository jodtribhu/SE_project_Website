<template>
    <div >
        <user-header ></user-header>
        <div class="bellowzindex">
         <base-card>
            <h1>Find your faculty.</h1>
            <div class='search-bar'>
                  <input type="text" v-model="search" class='mainbar input' v-if="publication" placeholder="Enter Publication">
                  <input type="text" v-model="search" class='mainbar input' v-else-if="skills" placeholder="Enter Skills">
                  <input type="text" v-model="search" class='mainbar input' v-else-if="project" placeholder="Enter Projects">
                   <input type="text" v-model="search" class='mainbar input' v-else placeholder="Search">
                  <input type="text" v-model="location" class="locationbar input" placeholder="Location">
              </div>
              <div class="filters">
                <button type="button" id="publications" class="filter-btn" @click="togglePublication()">Publication</button>
                <button type="button" id="project" class="filter-btn" @click="toggleProject()">Project</button>
                <button type="button" id="skills" class="filter-btn" @click="toggleSkills()">Skills</button>
                <button type="button" id="availability" class="filter-btn" @click="toggleAvailable()">Available for project</button>
                <div class="department-section">
                    <select name="department" class="department input" id="department" v-model="searchdepartment" >
                        <option value="None" selected>None</option>
                        <option value="Computer Science">CSE</option>
                        <option value="Electronics and Communication">ECE</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Civil">Civil</option>
                        <option value="Electrical and Engineering">EEE</option>
                        <option value="Electronics and Instrumentation">EIE</option>
        
                    </select>
                  </div>
              </div>
          </base-card>
          <base-card v-if="search!=''"> 
          <h4 class="heading">Search Results</h4>
             <div class="eachpeople" v-for="facultyprofile in searchedProfile()" :key="facultyprofile._id">
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
          <base-card>
          <h4 class="heading">People You May Know</h4>
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
      serverpath:"http://localhost:8081/upload/ ",
      available:false,
      publication:false,
      skills:false,
      project:false,
      search:"",
      searchdepartment:"",
      location:""

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
      searchedProfile(){
        var rprofiles;
        let profiles = this.$store.getters['allFacultyProfiles'];
        console.log("LLLLLLLLLLLLLLLLLLLLlllllll");
        console.log(profiles);
        console.log(this.search);
        if(this.publication==true && this.search!=""){
          console.log("LLLLLLLLLLLLLLLLLLLLlllllldddddddddl");
           rprofiles=profiles.filter((profiles) => {
                console.log(profiles);
               var publications=profiles.publications.filter((publication)=>{
                  if (publication.publicationName.toUpperCase().includes(this.search.toUpperCase())) {
                    return true;
                    }
                });
                if(publications.length>0){
                  return true;
                }
            });
          if(this.searchdepartment!="None"){
            rprofiles=rprofiles.filter((allFacultyProfile) => {
              if (allFacultyProfile.Department.toUpperCase().includes(this.searchdepartment.toUpperCase())) {
                return true;
               }
            });
          }
          if(this.location!=""){
            rprofiles=rprofiles.filter((allFacultyProfile) => {
              if (allFacultyProfile.City.toUpperCase().includes(this.location.toUpperCase())) {
                return true;
               }
               else if(allFacultyProfile.Address.toUpperCase().includes(this.location.toUpperCase()))
               {
                 return true;
               }
            });
          }
          return rprofiles;
        }
       else if(this.skills==true && this.search!=""){
           rprofiles=profiles.filter((profiles) => {
                console.log(profiles);
               var preferences=profiles.preferences.filter((preference)=>{
                  if (preference.toUpperCase().includes(this.search.toUpperCase())) {
                    return true;
                    }
                });
                if(preferences.length>0){
                  return true;
                }
            });
        if(this.searchdepartment!="None"){
          rprofiles=rprofiles.filter((allFacultyProfile) => {
              if (allFacultyProfile.Department.toUpperCase().includes(this.searchdepartment.toUpperCase())) {
                return true;
               }
            });
        }
        if(this.location!=""){
            rprofiles=rprofiles.filter((allFacultyProfile) => {
              if (allFacultyProfile.City.toUpperCase().includes(this.location.toUpperCase())) {
                return true;
               }
               else if(allFacultyProfile.Address.toUpperCase().includes(this.location.toUpperCase()))
               {
                 return true;
               }
            });
          }
        return rprofiles;
        }
       else if(this.project==true && this.search!=""){
           rprofiles=profiles.filter((profiles) => {
                console.log(profiles);
               var projects=profiles.projects.filter((project)=>{
                  if (project.projectName.toUpperCase().includes(this.search.toUpperCase())) {
                    return true;
                    }
                  else if(project.associated_with.toUpperCase().includes(this.search.toUpperCase())){
                    return true;
                  }
                });
                if(projects.length>0){
                  return true;
                }
            });
        if(this.searchdepartment!="None"){
          rprofiles=rprofiles.filter((allFacultyProfile) => {
              if (allFacultyProfile.Department.toUpperCase().includes(this.searchdepartment.toUpperCase())) {
                return true;
               }
            });
        }
        if(this.location!=""){
            rprofiles=rprofiles.filter((allFacultyProfile) => {
              if (allFacultyProfile.City.toUpperCase().includes(this.location.toUpperCase())) {
                return true;
               }
               else if(allFacultyProfile.Address.toUpperCase().includes(this.location.toUpperCase()))
               {
                 return true;
               }
            });
          }
        return rprofiles;
        } 
      else if(this.project==true && this.search!=""){
           rprofiles=profiles.filter((profiles) => {
                console.log(profiles);
               var projects=profiles.projects.filter((project)=>{
                  if (project.projectName.toUpperCase().includes(this.search.toUpperCase())) {
                    return true;
                    }
                  else if(project.associated_with.toUpperCase().includes(this.search.toUpperCase())){
                    return true;
                  }
                });
                if(projects.length>0){
                  return true;
                }
            });
        if(this.searchdepartment!="None"){
          rprofiles=rprofiles.filter((allFacultyProfile) => {
              if (allFacultyProfile.Department.toUpperCase().includes(this.searchdepartment.toUpperCase())) {
                return true;
               }
            });
        }
        if(this.location!=""){
            rprofiles=rprofiles.filter((allFacultyProfile) => {
              if (allFacultyProfile.City.toUpperCase().includes(this.location.toUpperCase())) {
                return true;
               }
               else if(allFacultyProfile.Address.toUpperCase().includes(this.location.toUpperCase()))
               {
                 return true;
               }
            });
          }
        return rprofiles;
        }     
        else if( this.publication==false && this.skills==false && this.project==false && this.search!=""){
          console.log("Insiddddddddddddddddddd");
          rprofiles=profiles.filter((allFacultyProfile) => {
              if (allFacultyProfile.FirstName.toUpperCase().includes(this.search.toUpperCase()) || allFacultyProfile.LastName.toUpperCase().includes(this.search.toUpperCase())  ) {
                return true;
               }
            });
         if(this.searchdepartment!="None"){
          rprofiles=rprofiles.filter((allFacultyProfile) => {
              if (allFacultyProfile.Department.toUpperCase().includes(this.searchdepartment.toUpperCase())) {
                return true;
               }
            });
        }
        if(this.location!=""){
            rprofiles=rprofiles.filter((allFacultyProfile) => {
              if (allFacultyProfile.City.toUpperCase().includes(this.location.toUpperCase())) {
                return true;
               }
               else if(allFacultyProfile.Address.toUpperCase().includes(this.location.toUpperCase()))
               {
                 return true;
               }
            });
          }
          return rprofiles;
        }  
        else{
          return "";
        }

      },
      toggleAvailable(){
        this.available=!this.available;
        this.publication=false;
        this.skills=false;
        this.project=false;
      },
      togglePublication(){
        this.publication=!this.publication;
        this.available=false;
        this.skills=false;
        this.project=false;
      },      
      toggleSkills(){
        this.skills=!this.skills;
        this.publication=false;
        this.available=false;
        this.project=false;
      },
      toggleProject(){
        this.project=!this.project;
        this.publication=false;
        this.skills=false;
        this.available=false;
      },
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
    width: 40%;
    margin-right: 25px;
}
.locationbar{
    width:40%
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