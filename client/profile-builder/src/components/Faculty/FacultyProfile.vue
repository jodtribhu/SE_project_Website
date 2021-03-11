<template>
    <div>
        <h1>Hi Faculty {{ facultyId }}</h1>
        <h2>Is he logged in {{ isLoggedIn }} </h2>
    </div>
</template>

<script>
export default {
    data(){
        return{
            facultyId:'',
        }
    },
    created(){
        this.facultyId=this.$route.params.id;
        
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
            
        }
    },
     
}
</script>

<style scoped>

</style>