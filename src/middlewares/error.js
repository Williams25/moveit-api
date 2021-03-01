module.exports = app => {
  app.use((req, res, next) => {
    const erro = {
      message: 'Não encontrado',
      status: 404
    }
    next(erro)
  })

  app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
      erro: {
        message: error.message
      }
    })
  })
}