import FetchingStudents from '@/services/FetchingStudents';
export default{
    async loadstudents(context){ 
       const response =await FetchingStudents.fetchStudent();
       const students=[];
       for (var key in response.data) {
        students.push(response.data[key])
       }
        context.commit('setStudents',students);
       return {responsestatus:response.status}
    }
    
}