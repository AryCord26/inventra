const prisma = require('../config/database');

class ProductService {

  async getAll() {

    return await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  async getById(id) {

    return await prisma.product.findUnique({
      where: {
        id: Number(id)
      }
    });
  }

  async create(data) {

    return await prisma.product.create({
      data
    });
  }

  async update(id, data) {

    return await prisma.product.update({
      where: {
        id: Number(id)
      },
      data
    });
  }

  async delete(id) {

    return await prisma.product.delete({
      where: {
        id: Number(id)
      }
    });
  }
}

module.exports = new ProductService();
