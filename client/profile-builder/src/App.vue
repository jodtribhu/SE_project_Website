<template >
<div class="background">
<the-header></the-header>
<router-view ></router-view>
</div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
  components: {
      'the-header':TheHeader
  },
   created(){
      this.$store.dispatch('tryLogin')
    },
    mounted() {
    let themejs = document.createElement('script')
    themejs.setAttribute('src', 'https://kit.fontawesome.com/5a55e4b82b.js')
    document.head.appendChild(themejs)
},  
}
</script>

<style >
@import url('https://kit.fontawesome.com/5a55e4b82b.js');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}
html {
  font-family: "Roboto", sans-serif;
  background-color: #fefffe;
 
}

</style>
