<template >
   <div class="fixed" >
        <header class="background" >
        <nav>
            <h1>
                <router-link to="/">Profile Builder </router-link>
            </h1>
             <div class="search-bar">
                    
                    <span><i class="fas fa-search"></i> <input type="search" autoComplete="on" :list="allFacultyProfiles" v-model="search" class="search" placeholder="Search" ></span>
                    
            </div>
            <ul>
                <li> 
                    <div class="container-items">
                         <i class="fas fa-home"></i><router-link class="navigation-item" to="/home" >Home</router-link> <span class="sr-only"></span>
                    </div> 
                </li>
                <li>
                    <div class="container-items">
                        <i class="fas fa-globe"></i> <p class="navigation-item">Network</p>
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
    <ul class="SelectItems">
      <li   v-on:click="goToSearch($event)" class="SelectListItems" v-for="facultyprofile in allFacultyProfiles" :id="facultyprofile._id" :key="facultyprofile._id">{{facultyprofile.FirstName}}  {{facultyprofile.LastName}} </li>
    </ul>
    
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
.fixed{
  position: fixed;
  width: 100%;
  top:0;
  left:0;
  z-index: 100;
}
.SelectItems{
  position: relative;
  left: 21%;
  max-width: 30%;
  margin-top: 3.6%;
   list-style-type: none;
   
  z-index:9999;
}
.SelectListItems{
   font-family: 'Montserrat', sans-serif;
  border-radius: 5px;
  padding-left: 2px;
  box-shadow: rgb(99, 97, 96);
  margin-top:0.5px;
  padding: 8px 2px 8px 8px;
  
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
    
    background-color: whitesmoke
}
.fas{
    font-size: 1.4rem;
    margin-left: 2px;
}

.navigation-item{
    font-size: 0.8rem;
    color: black;
    
}
.search {
   height: 30px;
    width: 400px;    
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
  display: flex;
 
  font-family: 'Montserrat', sans-serif;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #fb743e;
  display: inline-block;
  padding: 0.75rem 0.5rem;
  border: 1px solid transparent;
}

h1 {
  margin: 0;
  padding-bottom: 16px;
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
  justify-content: space-around;
  align-items: center;
}

header ul {
  
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 40%;
  justify-content: flex-end;
  align-items: center;
}

li {
     flex-basis: 10%;
     padding:8px 2px 2px 2px;
}

.container-items
{
    text-align: center;
}
.container-login{
    padding-bottom: 16px;
    padding-left: 2%;
}
</style>

