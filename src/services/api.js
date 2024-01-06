import axios from 'axios';


const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Do something before sending the request
    // For example, you can set headers or modify the request data
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Do something with the response data
    // For example, you can modify the response data or handle errors
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default api;
