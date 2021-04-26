<template>
    <div class="topContainer">
        <user-header></user-header>
        <div class="container">
            <div class="tab">
                <p class="tab_text">Pending Requests</p>
            </div>
            <div class="tab">
                <p class="tab_text">Accepted Requests</p>
            </div>
            <div class="tab">
                <p class="tab_text">Request Settings</p>
            </div>

        </div>
        <div  class=" card ">
            <div class="send" v-for="request in requests" :key=request.studentRollNo>
                <request-card :request=request :facultyProfileOne=facultyProfileOne></request-card>
            </div>
        
        </div>
    </div>
</template>
<script>
// import emailjs from 'emailjs-com';

import RequestCard from "./RequestCard.vue";
export default {
    components:{RequestCard},
    data(){
        return{
            facultyProfileOne:{},
        }

    },
    computed:{
        requests(){
            return this.facultyProfileOne.requests
        }
    },
    created() {
        this.facultyId = this.$route.params.id;
         this.loadfacultyprofile();
         this.facultyProfileOne=this.$store.getters["facultyprofile"];
    },
    methods:{
        async loadfacultyprofile() 
            {
                await this.$store.dispatch("loadthefacultyprofile",{id:this.facultyId});
                console.log("finished");   
            },

}
}
</script>
<style scoped>
hr{
    margin: 2rem 0;
}


.card_container{
    display: flex;

}
.card {
  margin:0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  background-color: #f6f6f6;
  width: 60rem;
 
}
.container{
    margin-top:5rem;
    display: flex;
}
.tab{

    border-color: black;
    border-style: solid ;
    border-width: 1px;
    border-radius: 10px;
    width:20rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-self: center;
}
.tab_text{
    text-align: center;
    font-size:1rem;
    font-family: "Montserrat", sans-serif;
}
.topContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.heading{
    font-size:1.2rem;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
}
.content{
    font-size:1rem;

    font-family: "Montserrat", sans-serif;
}
</style>