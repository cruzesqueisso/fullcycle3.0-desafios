import axios from "axios";

const http = axios.create({
  baseURL: 'http://backend-service:3000'
});

export default http;