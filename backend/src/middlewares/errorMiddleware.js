module.exports = (error, req, res, next) => {

  console.error(error);

  return res.status(500).json({
    success: false,
    message: 'Erro interno do servidor',
    error:
      process.env.NODE_ENV === 'development'
        ? error.message
        : undefined
  });

};
