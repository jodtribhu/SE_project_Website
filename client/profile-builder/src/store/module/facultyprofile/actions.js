import FetchingEachFacultyProfile from '@/services/FetchingEachFacultyProfile';
export default{
    async loadthefacultyprofile(context,payload){
        const response =await FetchingEachFacultyProfile.fetchFacultyProfile({id:payload.id});
        const facultyprofile=response.data;
        context.commit('setFacultyProfile',facultyprofile);     
         return facultyprofile
    },

}