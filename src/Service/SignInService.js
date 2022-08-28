import Api from './APILogin'
const BASE_URL = "https://modyapi2.azurewebsites.net/api/auth/login";

class SignInService{
    postData(data){
        return Api.post(BASE_URL,data);
    }
}

export default new SignInService()