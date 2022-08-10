import axiosClient from '@src/config/axiosConfig';

export default class DashboardService {
  async get () {
    return axiosClient.get('/dashboard');
  }
}
