const prisma = require('../config/database');

class RequestService {

  async getAll() {

    return await prisma.request.findMany({
      include: {
        user: true,
        product: true
      }
    });
  }

  async getById(id) {

    return await prisma.request.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        user: true,
        product: true
      }
    });
  }

  async create(userId, data) {

    const {
      productId,
      quantity
    } = data;

    const product =
      await prisma.product.findUnique({
        where: {
          id: Number(productId)
        }
      });

    if (!product) {
      throw new Error('Produto não encontrado');
    }

    if (product.quantity < quantity) {
      throw new Error('Estoque insuficiente');
    }

    return await prisma.request.create({
      data: {
        userId,
        productId,
        quantity
      }
    });
  }

  async update(id, data) {

    return await prisma.request.update({
      where: {
        id: Number(id)
      },
      data
    });
  }

  async delete(id) {

    return await prisma.request.delete({
      where: {
        id: Number(id)
      }
    });
  }
}

module.exports = new RequestService();
