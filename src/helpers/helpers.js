import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://chapterly-backend.vercel.app',
  // baseURL: 'http://localhost:3000',
});

export function customAxios() {
  return axiosInstance;
}
