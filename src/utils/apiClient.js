import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://62.146.177.196:8080/api",
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth headers here if needed
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response?.data || "Something went wrong")
);

export default apiClient;
