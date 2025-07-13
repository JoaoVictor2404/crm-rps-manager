import axios from 'axios';
import config from '../config/default';

export const taxApiService = {
  async submitRPS(rps: any) {
    const url = `https://api.prefeitura.gov/${rps.city}/rps`;
    return axios.post(url, rps);
  }
};
