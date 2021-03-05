import FetchingFaculties from '@/services/FetchingFaculties';
export default{
    async loadfaculties(context){ 
       const response =await FetchingFaculties.fetchFaculty();
       const faculties=[];
       for (var key in response.data) {
        faculties.push(response.data[key])
       }
        context.commit('setFaculties',faculties);
        return {responsestatus:response.status}
    }
    
}