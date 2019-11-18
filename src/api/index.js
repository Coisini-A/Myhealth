import axios from 'axios';

let Http = axios.create({
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  timeout: 30000
});

Http.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

Http.interceptors.response.use(
  reponse => {
    return reponse;
  },
  error => {
    return Promise.reject(error);
  }
);

export default Http;
