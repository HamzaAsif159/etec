import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://ndyaggyxnq.us-east-1.awsapprunner.com/api",
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
