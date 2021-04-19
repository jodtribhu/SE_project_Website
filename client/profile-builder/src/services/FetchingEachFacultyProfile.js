import Api from '@/services/Api';

export default{
    fetchFacultyProfile(credentials){
        console.log(credentials);
        return Api().post('fetchTheFacultyProfile',credentials);
    },
    addFacultyBasicDetails(credentials){
        return Api().post('addFacultyBasicDetails',credentials);
    },
    addFacultyLinks(credentials){
        return Api().post('addFacultyLinks',credentials);
    },
    addFacultyPreferences(credentials){
        return Api().post('addFacultyPreferences',credentials);
    },
    addFacultyProfilePhoto(credentials){
        return Api().post('uploadProfilePhoto',credentials);
    },
    addFacultyProject(credentials){
        return Api().post('addFacultyProject',credentials);
    },
    addFacultyPublications(credentials){
        return Api().post('addFacultyPublication',credentials);
    },
    editFacultyLinks(credentials){
        return Api().post('editFacultyLinks',credentials);
    },
    editpublication(credentials){
        return Api().post('editPublication',credentials);
    },
    editFacultyProject(credentials){
        return Api().post('editFacultyProject',credentials);
    },
    editPassword(credentials){
        return Api().post('editPassword',credentials);
    },
    addPublicationCount(credentials){
        return Api().post('addPublicationCount',credentials);
    }
    
}
