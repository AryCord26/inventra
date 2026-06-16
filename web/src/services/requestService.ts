import api from './api';

export const requestService = {

  async getAll() {

    const response =
      await api.get('/requests');

    return response.data;
  },

  async create(data: any) {

    const response =
      await api.post(
        '/requests',
        data
      );

    return response.data;
  },

  async update(
    id: number,
    data: any
  ) {

    const response =
      await api.put(
        `/requests/${id}`,
        data
      );

    return response.data;
  },

  async delete(id: number) {

    const response =
      await api.delete(
        `/requests/${id}`
      );

    return response.data;
  }
};
