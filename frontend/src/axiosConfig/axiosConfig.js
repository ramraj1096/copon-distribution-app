import axios from 'axios';
import axiosRetry from 'axios-retry';
import Cookie from "universal-cookie";
import { getCookie } from './cookieFunc';

const axiosInstance = axios.create({
  baseURL: 'https://coupon-claim-backend-uynv.onrender.com', 
  withCredentials: true, 
});

axiosRetry(axiosInstance, {
  retries: 3, 
  retryDelay: (retryCount) => {
    return Math.pow(2, retryCount) * 1000; 
  },
  shouldResetTimeout: true, 
});

axiosInstance.interceptors.request.use(config => {
  const cookie = new Cookie();
  const token = getCookie("accessToken");
  
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;