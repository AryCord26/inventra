const prisma = require('../config/database');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

class AuthService {

  async register(data) {

    const { name, email, password } = data;

    const userExists = await prisma.user.findUnique({
      where: { email }
    });

    if (userExists) {
      throw new Error('Email já cadastrado');
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });

    return user;
  }

  async login(data) {

    const { email, password } = data;

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const validPassword =
      await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error('Senha incorreta');
    }

    const token = generateToken(user);

    return {
      token,
      user
    };
  }

  async profile(userId) {

    return await prisma.user.findUnique({
      where: {
        id: userId
      }
    });
  }
}

module.exports = new AuthService();
