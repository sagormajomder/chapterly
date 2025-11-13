import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://chapterly-backend.vercel.app',
});

export function customAxios() {
  return axiosInstance;
}
