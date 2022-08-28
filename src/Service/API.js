import axios from "axios";
export default axios.create({
  baseURL: "https://modyapi2.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json",
    'Authorization': sessionStorage.getItem('token')
  }
});