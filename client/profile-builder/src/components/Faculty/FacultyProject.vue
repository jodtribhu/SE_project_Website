<template>
    <div class="card">
        <base-dialog :show=showDialog class="dialogbox" title="Add Project" @close="opencloseDialog">
         <div class="project-section">
            <div class="project-content">
           
            <label for="project-name">Project Name</label>
            <input v-model="projectName" type="text" class="project-name full">
            <label  for="current-proj">I am currently working on this project</label>
            <input v-model="currentlyworking" type="checkbox" class="project-check">
            <div class="proj-date">
                <div v-if="!currentlyworking" class="proj-start-date">
                    <label for="end-date">End Date</label>
                    <input v-model="enddate" type="date" class="end-date half">
                </div>
                <div class="proj-start-month">
                      <label for="start-date">Start Date</label>
                      <input v-model="startdate" type="date" class="start-date half">

                </div>
            </div>
            <div class="labelcontributers">
                <label  for="contributers">Add contributers(Leave empty if no contributers)</label>
            </div>
            
            <input v-model="contributers" type="text" class="contributers full">
            <div  class="associated-field">
                <label> Related Field </label>
            </div>
                <select v-model="associated_with" class="fullSelect ">
                    <option v-for="tag in tags" :key="tag" value="none" active>{{tag}}</option>
                </select>

           
            <div class="project">
                 <label class="project-url" for="project-url">Project URL</label>
            </div>
                <input v-model="project_url" type="text" class=" full">
            <div class="project">
                <label for="project-desc">Project Description</label>
            </div>
                <textarea v-model="project_description" type="text" class="project-desc para"></textarea>
            
           <button @click="submitButton">Submit</button>
        </div>
        </div>
        </base-dialog>
        
        <button class="projectadd" @click="addproject">+</button>
        <h2>Projects</h2>
        <div class="singleitems" v-for="facultyProject in facultyProjects" :key="facultyProject._id">
            <project-card :id="id" :facultyproject="facultyProject" ></project-card>
        </div>
    </div>
</template>

<script>
import FetchingEachFacultyProfile from '@/services/FetchingEachFacultyProfile';
export default {
    props:['id','facultyProjects','computedisUserLoggedIn'],
    data(){
        return{
             tags:["Machine Learning","Computer Networks","Front-End Development","Back-End Development","Artificial Intellegence"],
            showDialog:false,
            projectName:"",
            currentlyworking:false,
            startdate:"",
            enddate:"",
            contributers:"",
            associated_with:"",
            project_url:"",
            project_description:""
        }
    },
    methods:{
         opencloseDialog(){
            this.projectName="";
            this.currentlyworking=false;
            this.startdate="";
            this.enddate="";
            this.contributers="";
            this.associated_with="";
            this.project_url="";
            this.project_description="";
            this.showDialog=!this.showDialog;
            this.link="";
            this.error="";
        },
        addproject(){
            this.showDialog=!this.showDialog;
              
        },
        async submitButton(){
                this.showDialog=false;
                try {
                    const response=await FetchingEachFacultyProfile.addFacultyProject(
                        {
                        id:this.id,
                        projectName:this.projectName,
                        currentlyworking:this.currentlyworking,
                        startdate:this.startdate,
                        enddate:this.enddate,
                        contributers:this.contributers,
                        associated_with:this.associated_with,
                        project_url:this.project_url,
                        project_description:this.project_description
                        });
                    if(response.data.message==="success"){
                        this.$emit('addedAProject')
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
</script>

<style scoped>
.labelcontributers
{
    position: relative;
    margin-top:10px;
    margin-bottom:5px;
}
.pname{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem ;
    font-weight: 400;
}
.cworking{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem ;
    font-weight: 400;
}
.sdate{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem ;
    font-weight: 400;
}
.edate{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem ;
    font-weight: 400;
}
.contributers{
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem ;
    font-weight: 400;
}
.associated{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem ;
    font-weight: 400;
}
.purl{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem ;
    font-weight: 400;
}
.pdesc{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem ;
    font-weight: 400;
}
li{
    list-style: none;
}
.singleitems{
    padding-top: 10px;
    padding-bottom: 10px;
}
.para{
    min-height: 100px ;
    width: 95%;
    padding: 5px;
}
.project{
     margin-top: 8px;
    margin-bottom: 4px;
}
.associated-field{
    margin-top: 4px;
    margin-bottom: 4px;
}
h2{
    font-family: "Montserrat", sans-serif;
  position: relative;
    top:20px;
    left:20px;  
}
.projectadd{
    position: absolute;
    top:20px;
    right:20px;
    border-radius: 100%;
    font-size:2rem;
    height: 2.5rem;
    width:2.5rem;
     background-color: #271d57;
    color: blanchedalmond;

}
.projectadd:hover{
     background-color: #316e97;
}
.card {
  min-height: 90px;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.26);
  
  margin: 2rem auto;
  background-color: #f6f6f6;
  max-width: 60%;
}
.project-section{
    width: 100%;
    background-color: white;
    font-family: 'Nunito Sans', sans-serif;
    font-size:1rem;
    font-weight: bold;
    border-radius: 10px;
}
.project-content{
    padding: 10px;
}
.project-name{
    display: block;
}
input{
    margin: 5px 0px 5px 2px;
    border-radius: 5px;
    max-width: 100%;
}
.full{
    
    width: 92%;
    padding: 5px;
}
.fullSelect{
     width: 95%;
    padding: 5px;
}
.project-check{
    width: 20px;
}
.half{
    margin-right: 10px;
    width: 260px;
    padding: 5px;
}
.proj-date{
    position: relative;
    height: 60px;
    padding-top: 5px;
}
.start-date,.start-month,.end-date,.end-month{
    display: block;
    margin: 5px 0px 5px 2px;
  
    border-radius: 5px;
    max-width: 100%;
}

.proj-start-date{
    position: absolute;
    right: 20px;
}
.proj-end-date{
    position: absolute;
    right: 30px;
}
.contributers{
    padding-top: 5px;
     padding-bottom: 5px;
}
.project-url{
    padding-top: 5px;
     padding-bottom: 5px;
}
</style>