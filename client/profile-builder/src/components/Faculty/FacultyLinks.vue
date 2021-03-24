<template>
    <div class="card">
    
     <base-dialog :show=showDialog class="dialogbox" title="Add a new link" @close="opencloseDialog">
        <div class="contain">
            <label class="dialogbox" for="url">Enter the link:  </label>
            <input v-model="link" type="text" name="link">
            <span class="space">
                <button class="dialoglinkbutton" @click="addnewLink"> Add</button>
            </span>
            <p class="error" v-if="error">{{error}}</p>
        </div> 
     </base-dialog>
     <h2>Links</h2>
      <button v-if="computedisUserLoggedIn" class="linkbutton" @click="opencloseDialog">Add a new link</button>
      <div class="linkspadding">
        <div  class="divpadding" v-for="singlelink in facultyProfilelinks" :key="singlelink._id">
            <p class="eachlink" v-if="singlelink.link.includes('linkedin')">
                <i class="fab fa-linkedin"></i> <a :href="singlelink.link">{{singlelink.link}}</a>
            </p>
            <p class="eachlink" v-else-if="singlelink.link.includes('github')">
                <i class="fab fa-github-square"></i><a :href="singlelink.link">{{singlelink.link}}</a>
            </p>
            <p class="eachlink" v-else-if="singlelink.link.includes('facebook')">
                <i class="fab fa-facebook-square"></i><a :href="singlelink.link">{{singlelink.link}}</a>
            </p>
             <p class="eachlink" v-else-if="singlelink.link.includes('instagram')">
               <i class="fab fa-instagram-square"></i><a :href="singlelink.link">{{singlelink.link}}</a>
            </p>
            <p class="eachlink" v-else-if="singlelink.link.includes('twitter')">
               <i class="fab fa-twitter-square"></i><a :href="singlelink.link">{{singlelink.link}}</a>
            </p>
            <p class="eachlink" v-else-if="singlelink.link.includes('stackoverflow')">
               <i class="fab fa-stack-overflow"></i><a :href="singlelink.link">{{singlelink.link}}</a>
            </p>
             <p class="eachlink" v-else>
               <i class="fas fa-external-link-alt"></i><a :href="singlelink.link">{{singlelink.link}}</a>
            </p>
            
        </div>
     </div>
    </div>
</template>

<script>
import FetchingEachFacultyProfile from '@/services/FetchingEachFacultyProfile';
export default {
    props:['id','facultyProfilelinks','computedisUserLoggedIn'],
    data(){
        return{
            showDialog:false,
            link:"",
            error:""
        }
    },
    methods:{
        opencloseDialog(){
            this.showDialog=!this.showDialog;
            this.link="";
            this.error="";
        },
        async addnewLink(){
            if(this.link==""){
                this.showDialog=true; 
                this.error="Input has not been entered"
            }
            else{
                 this.showDialog=false;
                try {
                    const response=await FetchingEachFacultyProfile.addFacultyLinks({id:this.id,link:this.link});
                    if(response.data.message==="success"){
                        this.$emit('addedALink')
                        this.link=""
                         this.error=""
                    }
                } catch (error) {
                    console.log(error);
                     this.error=error;
                    this.error=error.response.data.error;
                }
            }
           
         
             
       
        }
    }
}
</script>

<style scoped>
.error{
    color:red;
    font-size: 1rem;
}
.space{
    margin-left: 10px;
}
.contain
{
    padding: 20px 2px 12px 2px;
    font-size:20px;
}
.linkspadding{
    padding: 0px 2px 12px 2px;
}
.card {
  position: relative;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.26);
  
  margin: 2rem auto;
  background-color: #f6f6f6;
  max-width: 60%;
}
.dialoglinkbutton{
    font-family: 'Montserrat', sans-serif;
     padding: 2px 10px 2px 10px;
     background-color: #271d57;
     border: 1px solid #3a0061;
     border-radius: 2px;
     color: white;
     font-size:15px;
}
.dialogbox{
     font-family: 'Montserrat', sans-serif;
     padding: 2px 10px 2px 2px;
}

input{
    width: 40%;
    padding: 2px 2px 2px 2px;
    font-size:15px;
}
/* .eachLink{
    padding: 2px 2px 2px 2px;
    font-size: 0px;
} */
i{
    font-size:30px;
    padding: 2px 12px 2px 12px;
}
a:link {
  color: black;
  font-family: "Montserrat", sans-serif;
}

a:visited {
  color: black;
  font-family: "Montserrat", sans-serif;
}

a:hover {
  color: rgb(84, 83, 87);
  font-family: "Montserrat", sans-serif;
}
.linkbutton{
  text-align:center;
  padding: 0.75rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  background-color: #271d57;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  position:absolute; 
    top:20px;
   right:20px
}
.linkbutton:hover,
.linkbutton:active {
  background-color: #316e97;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}
h2{
    font-family: "Montserrat", sans-serif;
    padding: 4% 4% 1% 4% ;
}
</style>