import Api from './API'
const BASE_URL = "https://modyapi2.azurewebsites.net/api/transaksi";

class TransferService{
    create(data){
        return Api.post(BASE_URL,data);
    }
}

export default new TransferService()