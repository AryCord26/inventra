import api from './api';

export const requestService = {

  async getAll() {

    const response =
      await api.get('/requests');

    return response.data;
  },

  async create(data: any) {

    const response =
      await api.post('/requests', data);

    return response.data;
  }

};
