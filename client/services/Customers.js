import axios from "axios";

const API_URL = `http://localhost:8080/customers`;

class Customers {
  getAllCustomers() {
    return axios.get(API_URL);
  }

  addCustomers(data) {
    return axios.post(API_URL, data);
  }
}
export default new Customers();