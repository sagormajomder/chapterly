import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export function useSecureAxios() {
  const { user } = useAuth();
  axiosInstance.interceptors.request.use(config => {
    // console.log(config);
    config.headers.authorization = `Bearer ${user?.accessToken}`;
    return config;
  });

  return axiosInstance;
}
