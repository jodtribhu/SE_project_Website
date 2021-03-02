import Api from '@/services/Api';

export default{
    fetchStudent(){
        return Api().get('fetchstudents');
    },

}
