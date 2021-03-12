import Api from '@/services/Api';

export default{
    fetchFacultyProfile(credentials){
        console.log(credentials);
        return Api().post('fetchTheFacultyProfile',credentials);
    },
    addFacultyBasicDetails(credentials){
        return Api().post('addFacultyBasicDetails',credentials);
    },

}
