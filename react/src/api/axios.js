import axios from 'axios';

// Create a function to configure Axios instance with bearer token
const configureAxios = () => {
  // Create an instance of Axios
  const instance = axios.create({
    // Set your base URL if needed
    baseURL: 'http://localhost:5000/api',
    headers: {
      'Content-Type': 'application/json',
      // Set the authorization header with bearer token from local storage
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  // Add request interceptor to update authorization header before each request
  instance.interceptors.request.use(
    config => {
      // Get the token from local storage and update the authorization header
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      // Handle request errors
      return Promise.reject(error);
    }
  );

  return instance;
};

// Export the configured Axios instance
export default configureAxios();
