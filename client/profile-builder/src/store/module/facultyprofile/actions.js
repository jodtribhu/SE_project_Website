import FetchingEachFacultyProfile from '@/services/FetchingEachFacultyProfile';
export default{
    async loadthefacultyprofile(){
        const response =await FetchingEachFacultyProfile.fetchFacultyProfile();
        console.log(response.data);        
         return {responsestatus:response.status}
    }
  
}