import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api-deliveries.herokuapp.com/'
  });

  export default api;