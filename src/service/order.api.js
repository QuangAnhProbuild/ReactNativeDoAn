import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api',
  timeout: 1000,
});
// https://api.thecoffeehouse.com/api/v5/stores/all-pickup
export const login = params => instance.post('verify_mobile', params);
