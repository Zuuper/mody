import Api from './API'
const BASE_URL = "https://modyapi2.azurewebsites.net/api/user";

class UserService{
    getById(id){
        return Api.get(BASE_URL + '/' + id);
    }
}

export default new UserService()