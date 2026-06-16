const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
      email: user.email
    },
    authConfig.jwt.secret,
    {
      expiresIn: authConfig.jwt.expiresIn
    }
  );
}

module.exports = generateToken;
