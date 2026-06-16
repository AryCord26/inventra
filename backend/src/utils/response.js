class Response {

  static success(res, data = null, message = 'Sucesso') {
    return res.status(200).json({
      success: true,
      message,
      data
    });
  }

  static created(res, data = null, message = 'Criado com sucesso') {
    return res.status(201).json({
      success: true,
      message,
      data
    });
  }

  static badRequest(res, message = 'Requisição inválida') {
    return res.status(400).json({
      success: false,
      message
    });
  }

  static unauthorized(res, message = 'Não autorizado') {
    return res.status(401).json({
      success: false,
      message
    });
  }

  static forbidden(res, message = 'Acesso negado') {
    return res.status(403).json({
      success: false,
      message
    });
  }

  static notFound(res, message = 'Registro não encontrado') {
    return res.status(404).json({
      success: false,
      message
    });
  }

  static serverError(res, error) {
    return res.status(500).json({
      success: false,
      message: 'Erro interno do servidor',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : undefined
    });
  }
}

module.exports = Response;
