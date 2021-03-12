<template>
    <div>
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


</style>