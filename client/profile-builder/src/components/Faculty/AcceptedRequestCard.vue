<template>
    <div>
        <div class="top_card_container">
            <div class="sub_container">
                <div>
                    <p class="content">{{request.studentRollNo}}</p>
                </div>
                <div v-if="showDescription">
                    <p class="content_description">{{request.studentDescription}}</p>
                </div>
            </div>
        </div> 
            <p @click="show()" class="show">Show Description</p>
        <hr>     
    </div> 
</template>

<script>
export default {
    props:['request','facultyProfileOne'],
    data(){
        return{
            showDescription:false
        }
    },
    methods:{
        show(){
            this.showDescription=!this.showDescription;
        },      
    }
}
</script>
<style scoped>
.card_container{
    display: flex;
}
.sub_container{
    width:90%;
}
.top_card_container{
    display: flex;
    align-items: center;
}   
.heading{

    font-family: "Montserrat", sans-serif;
}
.content{
        font-size:1.2rem;
    font-weight: bold;

    font-family: "Montserrat", sans-serif;
}
.content_description{
    font-size:1rem;
    font-weight: 400;
    font-family: "Montserrat", sans-serif; 
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
.show{
    text-align: center;
    font-family: "Montserrat", sans-serif;
}
</style>