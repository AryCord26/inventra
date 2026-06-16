import api from './api';

export const userService = {

  async getAll() {

    const response =
      await api.get('/users');

    return response.data;
  },
};
