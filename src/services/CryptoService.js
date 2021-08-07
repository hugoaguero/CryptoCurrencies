import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://criptoya.com/api',
});

export default {
  getArgenBtc() {
    return apiClient.get('/argenbtc/btc/ars/0.5');
  },
  getBtc() {
    return apiClient.get('/btc/ars/0.1');
  },
  getEth() {
    return apiClient.get('/eth/ars/0.5');
  },
  getUsdc() {
    return apiClient.get('/usdc/ars/0.5');
  },
  getDolar() {
    return apiClient.get('/dolar');
  },
};
