module.exports = {
  jwt: {
    secret: process.env.JWT_SECRET || 'inventra_secret',
    expiresIn: '1d',
  },
};
