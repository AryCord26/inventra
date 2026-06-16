const prisma = require('../config/database');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

class AuthController {

  async register(req, res) {
    try {

      const { name, email, password } = req.body;

      const userExists = await prisma.user.findUnique({
        where: { email }
      });

      if (userExists) {
        return res.status(400).json({
          success: false,
          message: 'Email já cadastrado'
        });
      }

      const hashPassword =
        await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashPassword
        }
      });

      return res.status(201).json({
        success: true,
        user
      });

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async login(req, res) {
    try {

      const { email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Usuário não encontrado'
        });
      }

      const passwordMatch =
        await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({
          success: false,
          message: 'Senha incorreta'
        });
      }

      const token = generateToken(user);

      return res.json({
        success: true,
        token,
        user
      });

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async profile(req, res) {

    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id
      }
    });

    return res.json(user);
  }
}

module.exports = new AuthController();
