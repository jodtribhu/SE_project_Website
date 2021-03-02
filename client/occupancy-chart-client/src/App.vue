<template>
<div>
<the-header></the-header>
<router-view class="background"></router-view>
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
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
