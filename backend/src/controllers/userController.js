const prisma = require('../config/database');

class UserController {

  async index(req, res) {

    const users =
      await prisma.user.findMany();

    return res.json(users);
  }

  async show(req, res) {

    const { id } = req.params;

    const user =
      await prisma.user.findUnique({
        where: {
          id: Number(id)
        }
      });

    return res.json(user);
  }

  async create(req, res) {

    const {
      name,
      email,
      password,
      role
    } = req.body;

    const user =
      await prisma.user.create({
        data: {
          name,
          email,
          password,
          role
        }
      });

    return res.status(201).json(user);
  }

  async update(req, res) {

    const { id } = req.params;

    const user =
      await prisma.user.update({
        where: {
          id: Number(id)
        },
        data: req.body
      });

    return res.json(user);
  }

  async delete(req, res) {

    const { id } = req.params;

    await prisma.user.delete({
      where: {
        id: Number(id)
      }
    });

    return res.json({
      message: 'Usuário removido'
    });
  }
}

module.exports = new UserController();
