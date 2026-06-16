const prisma = require('../config/database');

class ProductController {

  async index(req, res) {

    const products =
      await prisma.product.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      });

    return res.json(products);
  }

  async show(req, res) {

    const { id } = req.params;

    const product =
      await prisma.product.findUnique({
        where: {
          id: Number(id)
        }
      });

    return res.json(product);
  }

  async create(req, res) {

    const {
      name,
      description,
      quantity,
      minimumStock
    } = req.body;

    const product =
      await prisma.product.create({
        data: {
          name,
          description,
          quantity,
          minimumStock
        }
      });

    return res.status(201).json(product);
  }

  async update(req, res) {

    const { id } = req.params;

    const product =
      await prisma.product.update({
        where: {
          id: Number(id)
        },
        data: req.body
      });

    return res.json(product);
  }

  async delete(req, res) {

    const { id } = req.params;

    await prisma.product.delete({
      where: {
        id: Number(id)
      }
    });

    return res.json({
      message: 'Produto removido'
    });
  }
}

module.exports = new ProductController();
