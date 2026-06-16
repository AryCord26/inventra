const prisma = require('../config/database');

class RequestController {

  async index(req, res) {

    const requests =
      await prisma.request.findMany({
        include: {
          user: true,
          product: true
        }
      });

    return res.json(requests);
  }

  async show(req, res) {

    const { id } = req.params;

    const request =
      await prisma.request.findUnique({
        where: {
          id: Number(id)
        },
        include: {
          user: true,
          product: true
        }
      });

    return res.json(request);
  }

  async create(req, res) {

    const {
      productId,
      quantity
    } = req.body;

    const request =
      await prisma.request.create({
        data: {
          userId: req.user.id,
          productId,
          quantity
        }
      });

    return res.status(201).json(request);
  }

  async update(req, res) {

    const { id } = req.params;

    const request =
      await prisma.request.update({
        where: {
          id: Number(id)
        },
        data: req.body
      });

    return res.json(request);
  }

  async delete(req, res) {

    const { id } = req.params;

    await prisma.request.delete({
      where: {
        id: Number(id)
      }
    });

    return res.json({
      message: 'Solicitação removida'
    });
  }
}

module.exports = new RequestController();
