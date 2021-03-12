<template>
    <div>
         <div class="divrelative">
             <div class="background-field">
        <img src="picture.png" alt="profile-picture" class="profile-picture">
       </div>
       <div class="profile-info">
            <h2 class="profile-name">Kanakan Pampadi</h2>
            <h3 class="profile-intro">My name is kanakan pampadi and i am a bad boi.</h3>
            <a href="#" class="myButton">Edit Profile</a>
       </div>
       </div>
       
        
        <base-card>
        <h1>Hi Faculty {{ facultyId }}</h1>
        <h2>Is he logged in {{ isLoggedIn }} </h2>
        </base-card>
        <base-card>
        <h3 v-if="facultyProfile==null">Build Profile</h3>
        <div class="flex-container">
            
                <label class="flex-items" for="profileFirstName">First Name: </label>
                <input class="flex-items"  name="profileFirstName" type="text" placeholder="First Name " v-model="email" />
                <label class="flex-items"  for="profileLastName">Last Name: </label>
                <input class="flex-items"  name="profileLastName" type="text" placeholder="Last Name " v-model="email" />  
                <br>
                <label class="flex-items"   for="profileCity">City: </label>
                <input class="flex-items"  name="profileCity" type="text" placeholder="City" v-model="email" />
                <label class="flex-items"  for="profileAddress">Address: </label>
                <input class="flex-items"   name="profileAddress" type="text" placeholder="Address" v-model="email" />
           
           
        </div>
         
        </base-card>
    </div>
</template>

<script>
import BaseCard from '../layout/BaseCard.vue';
export default {
  components: { BaseCard },
    data(){
        return{
            facultyId:'',
        }
    },
    created(){
        this.facultyId=this.$route.params.id;
        this.loadfacultyprofile();
    },
    computed:{
        isLoggedIn(){
            if(this.$store.getters.isUserLoggedIn)
            {
                if(this.$store.getters.idofuserloggedIn!=this.facultyId)
                    {
                        console.log("The id of logged in user "+this.$store.getters.idofuserloggedIn);
                        return false;
                    }
                else
                {
                    return true;
                }
            }
            else
            {
                return false;
            }
            
        },
        facultyProfile(){
            let facultyProfile = this.$store.getters['facultyprofile'];
            console.log("Inside facultyPro");
            return facultyProfile;
        }
    
    },
    methods:{
        async loadfacultyprofile(){
            try {
                await this.$store.dispatch('loadthefacultyprofile');
                } 
            catch (error) {
                this.error = error.message || 'Something went wrong';
                }
    
        }
    }
     
}
</script>

<style scoped>
.flex-container
{
  
   display: flex;
flex-wrap: wrap;

   
}
.flex-items{
  flex: 1 0 18%; /* explanation below */
  margin: 5px;
  height: 20px;
 
  
}
.divrelative{
    position: relative;
}
h2,h3{
    font-family: Arial, Helvetica, sans-serif;
}
.background-field{
    text-align: center;
    height: 5%;
    width:100%;
    background-color:#d3e0ea;
    border-radius:10px;
    padding: 100px 0px 100px 0px;
}
.profile-picture{
    border-radius: 100%;
    height: 180px;
    width:180px;
    z-index: 1;
    top: 150px;
    left: 100px;
    position: absolute;
}
.profile-info{
    height: 2%;
    width:100%;
    background-color:#f4f9f9;
    border-radius:10px;
    padding: 100px 0px 0px 0px;
    
}
.profile-name{
    padding: 0 20px;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 2.5rem;
    margin-top: 0;
}
.profile-intro{
    padding: 0 20px 20px 0px;
    font-family: 'Lato', sans-serif;
    font-size: 1.2rem;

}
.myButton {
	background-color:#79bbff;
	border-radius:5px;
	border:1px solid #337bc4;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:16px;
	font-weight:bold;
	padding:12px 44px;
	text-decoration:none;
	text-shadow:0px 1px 0px #276bb0;
    z-index: 5;
    top: 230px;
    right: 100px;
    position: absolute;
}
.myButton:hover {
	background-color:#378de5;
}


        


</style>