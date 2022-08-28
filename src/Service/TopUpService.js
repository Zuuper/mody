import Api from './APILogin'
const BASE_URL = "https://modyapi2.azurewebsites.net/api/topup";

class TopUpService{
    postData(data){
        return Api.post(BASE_URL,data);
    }
    getall(){
        return Api.get(BASE_URL);
    }
}

export default new TopUpService()