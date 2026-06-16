import api from './api';

export const dashboardService = {

  async getMetrics() {

    const response =
      await api.get('/dashboard');

    return response.data;
  },
};
