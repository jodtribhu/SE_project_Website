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
             
                <div class="top_card_container">
                    <div>
                        <div >
                            <p class="heading">Student Roll Number: </p>
                            <p class="content">{{request.studentRollNo}}</p>
                        </div>
                        <div >
                            <p class="heading">Student Description: </p>
                            <p class="content">{{request.studentDescription}}</p>
                        </div>
                    </div>
                    <div class="padding">
                        <div class="card_container"> 
                            <i @click="sendEmail(request)" class="far fa-check-circle"></i>
                            <i  @click="reject(request)" class="far fa-times-circle"></i>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        
        </div>
    </div>
</template>
<script>
// import emailjs from 'emailjs-com';
import FetchingEachFacultyProfile from '@/services/FetchingEachFacultyProfile';
export default {
    
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
            async sendEmail(req){
                var to_send=req.studentRollNo+"@cb.students.amrita.edu";
                console.log(to_send);
                var data = {
                    service_id: 'service_i58bij8',
                    template_id: 'template_wvfft2d',
                    user_id: 'user_Q6iqwmYwzNbENEH7yruBG',
                    template_params: {
                        to_name: this.facultyProfileOne.studentRollNo,
                        from_name:'Profile Builder',
                        to_mail:to_send,
                        message: "Your Request has been accepted by "+this.facultyProfileOne.FirstName+" "+this.facultyProfileOne.LastName+".You can further contact him on "+this.facultyProfileOne.PhoneNo,
                        reply_to:"This is a test for a college Project. For further queries contact us at admin@gmail.com"                       
                    }
                };
                 
                console.log("hello inside");
                try {
                        await FetchingEachFacultyProfile.sendEmail(data);
                        
                    } catch(error) {
                        console.log("There is an error");
                        console.log({error})
                    }
    
           
     },
}
}
</script>
<style scoped>
hr{
    margin: 2rem 0;
}
.far{
     font-size:2.5rem;
}
.fa-check-circle{
    color: green;
    padding-right:0.5rem;
}
.fa-times-circle{
    color: red;
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