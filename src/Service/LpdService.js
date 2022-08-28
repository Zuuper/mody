import Api from './API'
const BASE_URL = "https://modyapi2.azurewebsites.net/api/lpd";

class LpdService{
    getById(id){
        return Api.get(BASE_URL + '/' + id);
    }
    get(){
        return Api.get(BASE_URL);
    }
}

export default new LpdService()