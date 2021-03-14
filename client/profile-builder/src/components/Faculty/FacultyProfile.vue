<template>
  <div class="fullpage">
     <user-header></user-header>
     <div class="page">
         <div v-if="Object.keys(facultyProfile).length != 0 " >
      <div class="background-field">
       <img :src="require(`@/assets/cover-image.png`)"  alt="cover-picture" class="cover-picture" />

        <img :src="require(`@/assets/picture.png`)"  alt="profile-picture" class="profile-picture" />

      </div>
      <div class="profile-info">
        <a href="#" v-if="isLoggedIn" class="myButton">Edit Profile</a>
        <h2 class="profile-name">{{facultyProfile.FirstName}} {{facultyProfile.LastName}}</h2>
        <h3 class="profile-intro">{{facultyProfile.Description}}</h3>
        <div class="detailsstyle">
          <h3 class="profile-details"><i class="fas fa-map-marker-alt"></i> {{facultyProfile.Address}}</h3>
        <h3 class="profile-details"><i class="fas fa-phone-alt"></i>{{facultyProfile.PhoneNo}}</h3>
        </div>
      </div>
    </div>

    <!-- <base-card v-if="Object.keys(facultyProfile).length != 0">
      <h1>Hi Faculty {{ facultyId }}</h1>
      <h2>Is he logged in {{ isLoggedIn }}</h2>
    </base-card> -->
    <base-card v-if="Object.keys(facultyProfile).length === 0 && isLoggedIn">
      <h2 >Build Profile</h2>
      <div class="flex-container">
        <label class="flex-items" for="profileFirstName">First Name: </label>
        <input
          class="flex-items"
          name="profileFirstName"
          type="text"
          placeholder="First Name "
          v-model="profileFirstName"
        />
        <label class="flex-items" for="profileLastName">Last Name: </label>
        <input
          class="flex-items"
          name="profileLastName"
          type="text"
          placeholder="Last Name "
          v-model="profileLastName"
        />
        <br />
        <label class="flex-items" for="profileCity">City: </label>
        <input
          class="flex-items"
          name="profileCity"
          type="text"
          placeholder="City"
          v-model="profileCity"
        />
        <label class="flex-items" for="profilePhoneNo">Phone No:</label>
        <input
          class="flex-items"
          name="profilePhoneNo"
          type="text"
          placeholder="Phone No"
          v-model="profilePhoneNo"
        />

        <label class="flex-items" for="profileAddress"
          >Home Address or Work Address:
        </label>
        <input
          class="flex-items"
          name="profileAddress"
          type="text"
          placeholder="Address"
          v-model="profileAddress"
        />
      </div>
       <label class="flex-items" for="profileDescription">Short Description Of Yourself: </label>
      <input class="flex-items" name="profileDescription" type="text" placeholder="Short Description" v-model="profileDescription"/>
 
      <button @click="buildprofile" class="editButton">Build</button>

    </base-card>
     </div>
  
  </div>
</template>

<script>
import FetchingEachFacultyProfile from '@/services/FetchingEachFacultyProfile';
import BaseCard from "../layout/BaseCard.vue";
export default {
  components: { BaseCard },
  data() {
    return {
      facultyId: "",
      profileFirstName:"",
      profileLastName:"",
      profileCity:"",
      profilePhoneNo:"",
      profileAddress:"",
      profileDescription:"",
      search:''
    };
  },
  created() {
    this.facultyId = this.$route.params.id;
    console.log("Inside created profilesssssss");
    this.loadfacultyprofile();
   
  },

  computed: {
    isLoggedIn() {
      if (this.$store.getters.isUserLoggedIn) {
        if (this.$store.getters.idofuserloggedIn != this.facultyId) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    },
    facultyProfile() {
      let facultyProfile = this.$store.getters["facultyprofile"];
      console.log("fa");
      console.log(facultyProfile);
      return facultyProfile;
    },
  },
  methods: {
    async buildprofile(){
        console.log("Inside Build Profile");
        if(this.profileFirstName!="" && this.profileLastName!="" && this.profileAddress!="" && this.City!=""){
            try {
                await FetchingEachFacultyProfile.addFacultyBasicDetails({
                    id:this.facultyId,
                    fname:this.profileFirstName,
                    lname:this.profileLastName,
                    address:this.profileAddress,
                    phoneNo:this.profilePhoneNo,
                    city:this.profileCity,
                    description:this.profileDescription
                    })
                       
            } catch (error) {
                console.log(error);
                this.error=error.response.data.error;
            }
            this.loadfacultyprofile();
        }
        else
        {
            console.log("Empty Input");
        }
        
    },
    async loadfacultyprofile() {
      try {
       const response =await this.$store.dispatch("loadthefacultyprofile",{id:this.facultyId});
        if(Object.keys(response).length === 0 && !this.isLoggedIn)
        {
          console.log("Inside nulllll");
          this.$router.replace("/NotFound")
        }
        
      } catch (error) {
        this.error = error.message || "Something went wrong";
      }
    },
  },
};
</script>

<style scoped>
.page
{
  position: absolute;
  width: 100%;
  top: 100px;
}
.detailsstyle{
  padding-bottom: 10px;
}
.addresswidth {
  width: 76.8%;
  background-color: aqua;
}
input {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}
label {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
.flex-items {
  padding-top: 1.5%;
  flex: 1 0 18%; /* explanation below */
  margin: 8px;
  height: 30px;
}

.divrelative {
  position: relative;
}
h2,
h3 {
  font-family: Arial, Helvetica, sans-serif;
}
.background-field {
 
  margin: auto;
    text-align: center;
    height: 5%;
    width: 60%;
    background-color: #d3e0ea;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
}
.cover-image{
  
    object-fit: cover;
   width: 4000px;
   height: 200px;
}
.profile-picture {
  border-radius: 100%;
  height: 180px;
  width: 180px;
  z-index: 1;
  top: 120px;
  left: 320px;
  position: absolute;
}
.profile-info {
  margin: auto;
  height: 2%;
  width: 60%;
  background-color: #f4f9f9;
  border-radius: 10px;
  padding: 100px 0px 0px 0px;
}
.profile-details{
  padding: 0 20px;
  font-family: "Nunito Sans", sans-serif;
  margin-top: 0;

}
.fas{
  padding: 2px 10px 2px 0px;
}
.profile-name {
  padding: 0 20px;
  font-family: "Nunito Sans", sans-serif;

  margin-top: 0;
}
.profile-intro {
  padding: 0 20px 20px 20px;
  font-family: "Lato", sans-serif;
}
/* .myButton {
	background-color:#79bbff;
	border-radius:5px;
	border:1px solid #337bc4;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:16px;
	font-weight:bold;
	padding:12px 44px;
	text-decoration:none;
	text-shadow:0px 1px 0px #276bb0;
    z-index: 5;
    top: 230px;
    right: 100px;
    position: absolute;
} */
.myButton {
  background-color: #79bbff;
  border-radius: 5px;
  border: 1px solid #337bc4;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 44px;
  text-decoration: none;
  position: relative;
  text-shadow: 0px 1px 0px #276bb0;
  top: 60px;
  right: 60px;
  margin-left: 80%;
}
.editButton{
    background-color: #79bbff;
  border-radius: 5px;
  border: 1px solid #337bc4;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 44px;
  text-decoration: none;
  position: relative;
  text-shadow: 0px 1px 0px #276bb0;
  top: 10px;
  margin-bottom: 2%;
  margin-left: 80%;
}
.myButton:hover {
  background-color: #378de5;
}
</style>