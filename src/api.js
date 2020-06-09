import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-deliveries.herokuapp.com/'
  });

  export default api;