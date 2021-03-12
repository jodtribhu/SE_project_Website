import Api from '@/services/Api';

export default{
    fetchFacultyProfile(){
        return Api().get('fetchTheFacultyProfile');
    },

}
