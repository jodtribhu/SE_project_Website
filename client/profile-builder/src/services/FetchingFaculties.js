import Api from '@/services/Api';

export default{
    fetchFaculty(){
        return Api().get('fetchfaculties');
    },
    deleteFaculty(credentials){
        return Api().post('deletefaculty',credentials);
    }

}
