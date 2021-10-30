import axios from "axios";

const API_URL = `http://localhost:8080/estimates`;

class Items {
  getAllEstimates() {
    return axios.get(API_URL);
  }

  addEstimate(data) {
    return axios.post(API_URL, data);
  }
}
export default new Items();
