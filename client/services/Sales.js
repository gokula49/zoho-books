import axios from "axios";

const API_URL = `http://localhost:8080/sales`;

class Items {
  getAllSales() {
    return axios.get(API_URL);
  }

  addSales(data) {
    return axios.post(API_URL, data);
  }
}
export default new Items();
