import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';
export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // Accept: 'application/json',
  },
});
