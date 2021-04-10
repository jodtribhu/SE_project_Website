<template >
   <div class="fixed" >
        <header class="background" >
        <nav>
            <h1>
                <router-link to="/"> Profile Builder</router-link> 
            </h1>
             <div class="search-bar">     
                    <span><input type="text" autoComplete="on" :list="allFacultyProfiles" v-model="search" class="search" placeholder="Search" ><i class="fas fa-search"></i> </span>
            </div>
            <ul class="navigation-items">
                <li> 
                    <div class="container-items">
                         <router-link class="navigation-item" to="/home" ><i class="fas fa-home"></i> Home</router-link> <span class="sr-only"></span>
                    </div> 
                </li>
                <li>
                    <div class="container-items">
                         <p class="navigation-item"> <i class="fas fa-globe"></i> Network</p>
                    </div> 
                </li>
                <div class="container-login" v-if="!isLoggedIn">
                      <li><router-link to="/login" v-if="!isLoggedIn">Login</router-link></li>
                </div>
                <div class="container-login" v-if="isLoggedIn">
                      <li><router-link to="/login" @click="logout()">Logout</router-link></li>
                </div>
              
              
            </ul>
        </nav>
    </header>
    <div class="makeflex">
      <ul class="SelectItems">
      <li   v-on:click="goToSearch($event)" class="SelectListItems" v-for="facultyprofile in allFacultyProfiles" :id="facultyprofile._id" :key="facultyprofile._id" >
        <p class="imagePreviewWrapper" :style="{ 'background-image': `url(${link(facultyprofile.ProfilePhotoPath)})` }" ></p>
        <p class="searcht">{{facultyprofile.FirstName}}  {{facultyprofile.LastName}}</p> </li>
      </ul>
    </div>
   
    
   </div>
</template>


<script>

export default {
 
   created() {
    this.loadAllfacultyProfiles();
  },
  data(){
    return{
      search:""
    }
  },
   computed:{
    isLoggedIn(){
      return this.$store.getters.isUserLoggedIn;
    },
     allFacultyProfiles(){
            let allfacultyprofiles = this.$store.getters['allFacultyProfiles'];
            if(this.search=="")
            {
              return ""
            }
             allfacultyprofiles=allfacultyprofiles.filter((allFacultyProfile) => {
              if (allFacultyProfile.FirstName.toUpperCase().includes(this.search.toUpperCase()) || allFacultyProfile.LastName.toUpperCase().includes(this.search.toUpperCase())  ) {
                return true;
               }
            });
            return allfacultyprofiles;
        },
  },
  methods:{
    link(thelink){
      console.log("the link"+thelink);
      if(thelink==null){
        return "http://localhost:8081/upload/"+"default.png";
      }
      return "http://localhost:8081/upload/"+thelink.replace(/^.*[\\]/, '');
    },
    async goToSearch(event){
     
      await this.$router.push("/faculties/"+event.currentTarget.id);
       this.$emit('messageFromUserHeader',true)
      this.search=""
      this.$store.dispatch("loadthefacultyprofile",{id:this.$route.params.id});
    },
    logout(){
      this.$store.dispatch('logout');
      this.$router.replace('/login');
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
.searcht{
  padding-left: 10%;
 
}
.imagePreviewWrapper {
    float: left;
   border-radius: 100%;
    height: 35px;
    width: 35px;
    margin: 8px 8px 8px 8px;
    background-size: cover;
    background-position: center center;
   
}
.makeflex{
 
  width: 100%;
  display: flex;
  justify-content: center;
}
.fixed{
  position: fixed;
  width: 100%;
  top:0;
  left:0;
  z-index: 100;
  display: flex;
  /* background-color: aqua; */
}
.SelectItems{
  position: relative;
  
  width: 36%;
  margin-top: 3.6%;
   list-style-type: none;
  z-index:9999;
}
.SelectListItems{
   font-family: 'Montserrat', sans-serif;
  border-radius: 5px;

  box-shadow: rgb(99, 97, 96);
  padding: 8px 2px 2px 8px;
  
  border-bottom: 4px solid rgb(145, 137, 137);
  background-color: white;
}
.SelectListItems:hover{
  background-color: rgb(192, 186, 186);
}
.background{
   
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    display: flex;
    background-color: whitesmoke
}
.fas{
    font-size: 1.4rem;
    margin-bottom: 5px;
    margin-left: 2px;
}

.navigation-item{
    font-size: 0.8rem;
    color: black;
    
}
.search {
   height: 35px;
    width: 25rem;    
    border-radius: 100px;
    border: none;
    transition: all 0.2s;
    margin-right:-2rem;
    padding-left: 15px;
    -webkit-appearance: none;
}

.search:focus {
    outline:none;
    height: 35px;
    width: 26rem;    
    border-radius: 100px;
    border: none;
    margin-right:-2rem;
}

.search::placeholder{
  padding-left:5%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;

}
.search-bar{
    
    max-width: 500px;
    justify-content: flex-end;
    margin-bottom: 16px;
}
.fa-search{
    font-size: 1.2rem;
    padding-right: 4px;
}

/* Jodiss */

header {
  
  width: 100%;
  height: 4rem;
    font-family: 'Montserrat', sans-serif;
}

header a {
  text-decoration: none;
  color: #fb743e;
  display: inline-block;
  padding: 0.75rem 1rem;
  border: 1px solid transparent;
}

h1 {
  font-family: 'Bebas Neue', cursive;

  font-size:2rem;
  border-color: black;
  margin: 0;
  padding-bottom: 8px;
}

h1 a {
  color: #fb743e;
  margin: 0;
}

h1 a:hover
{
  border-color:transparent;
}

header nav {
  
  left:0;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

li {
     flex-basis: 10%;
     
}

.container-items
{
   
    text-align: center;
}
.container-login{

    font-weight: bold;
    padding-top:10px;
    padding-bottom: 16px;
    
}
</style>

