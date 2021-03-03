<template>
<div class="container"> 
        <div class="navigation-icons">
            <i @click="executeStudent" class="fas fa-user-graduate "></i>
            <p class="center">Student</p>
            <i @click="executeFaculty" class="fas fa-chalkboard-teacher"></i>
            <p class="center">Faculty</p>
            <i class="fas fa-passport"></i>
            <p class="center">Password</p>
        </div>
</div>
    
</template>
<script>
export default {
    methods:{
        executeStudent(){
            this.$emit('messageFromChild','Student')
        },
        executeFaculty(){
             this.$emit('messageFromChild','Faculty')
        }
    }
}
</script>

<style scoped>
.center{
    text-align: center;
}
 .container{
     border-radius: 10%;
      position: absolute;
      top:100px;
      bottom:40%;
      left:5px;
      width:60px;
      padding:10px;
      min-height: calc(100vh-20px);
      background-color:#ffff ;
      border: solid rgb(26, 25, 25);
      border-width: 0 1px 0 0;
      z-index: 999;
      transition: all .5s ease-in-out;
  }
      .control {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      margin-bottom: 10px;
    }
    .contol i {
        font-size: 2rem;
        cursor: pointer;
        transition: all .5s ease-in-out;
      }
     .navigation-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50px;
      float: left;
     
    }
    .navigation-icons i {
        font-size: 2rem;
        padding: 30px 0 0px 0;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    i:hover {
          color: #fff;
        }
</style>