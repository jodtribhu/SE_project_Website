import Api from '@/services/Api';

export default{
    fetchallFacultyProfiles(){
        console.log("fetchallFacultyProfiles");
        return Api().get('fetchallfacultyprofiles');
    },
}
