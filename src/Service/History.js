import Api from './API'
const BASE_URL = "https://modyapi2.azurewebsites.net/api/getUserTransaksi";

class HistoryService{
    getAll(){
        return Api.get(BASE_URL);
    }
    getById(data){
        return Api.get('https://modyapi2.azurewebsites.net/api/transaksi/' + data)
    }
}

export default new HistoryService()