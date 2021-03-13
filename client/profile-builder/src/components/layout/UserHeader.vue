<template >
   <div  class="background">
        <header class="flex-gap">
        <nav>
            <h1>
                <router-link to="/">Profile Builder </router-link>
            </h1>
             <div class="search-bar">
                    
                    <span><i class="fas fa-search"></i> <input type="search" class="search" placeholder="Search" ></span>
                    
            </div>
            <ul>
                <li> 
                    <div class="container-items">
                         <i class="fas fa-home"></i> <p class="navigation-item">Home</p><span class="sr-only"></span>
                    </div> 
                </li>
                <li>
                    <div class="container-items">
                        <i class="fas fa-globe"></i> <p class="navigation-item">Network</p>
                    </div> 
                </li>
                <div class="container-login">
                      <li><router-link to="/login" v-if="!isLoggedIn">Login</router-link></li>
                      <li v-if="isLoggedIn"><router-link to="/login" @click="logout()">Logout</router-link></li>
                </div>
              
              
            </ul>
        </nav>
    </header>
   </div>
</template>


<script>
export default {
    
}
</script>
<style scoped>
.background{
     
  
    background-color: whitesmoke
}
.fas{
    font-size: 1.4rem;
    margin-left: 2px;
}

.navigation-item{
    font-size: 0.8rem;
    
}
.search {
   height: 30px;
    width: 400px;    
}
.search-bar{
    
    max-width: 500px;
    justify-content: flex-end;
    margin-bottom: 16px;
}
.fa-search{
    font-size: 1.2rem;
    padding-right: 4px;
}

/* Jodiss */

header {
  
  width: 100%;
  height: 4rem;
  display: flex;
 
  font-family: 'Montserrat', sans-serif;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #fb743e;
  display: inline-block;
  padding: 0.75rem 0.5rem;
  border: 1px solid transparent;
}

h1 {
  margin: 0;
  padding-bottom: 16px;
}

h1 a {
  color: #fb743e;
  margin: 0;
}

h1 a:hover
{
  border-color:transparent;
}

header nav {
  left:0;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

header ul {
  
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 40%;
  justify-content: flex-end;
  align-items: center;
}

li {
     flex-basis: 10%;
     padding:8px 2px 2px 2px;
}

.container-items
{
    text-align: center;
}
.container-login{
    padding-bottom: 16px;
    padding-left: 2%;
}
</style>

