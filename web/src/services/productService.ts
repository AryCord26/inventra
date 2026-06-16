import api from './api';

export const productService = {

  async getAll() {

    const response =
      await api.get('/products');

    return response.data;
  },

  async create(data: any) {

    const response =
      await api.post('/products', data);

    return response.data;
  },
};
