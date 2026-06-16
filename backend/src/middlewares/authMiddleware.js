const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: 'Token não informado'
    });
  }

  const [, token] = authHeader.split(' ');

  try {

    const decoded = jwt.verify(
      token,
      authConfig.jwt.secret
    );

    req.user = decoded;

    return next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: 'Token inválido'
    });

  }
};
