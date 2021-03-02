const req = require('supertest')
const { app } = require('../app')

describe('Users', () => {

  it('Criar usuario deve ocorrer status 201', async () => {
    const res = await req(app).post('/users').send({
      userName: 'Williams25',
      password: '123'
    })

    expect(res.status).toBe(201)
  })

  it('Criar um usuario já existente deve ocorrer erro status 400', async () => {
    const res = await req(app).post('/users').send({
      userName: 'Williams25',
      password: '123'
    })

    expect(res.status).toBe(400)
  })

  it('Criar usuario sem corpo da requisição deve ocorrer status 400', async () => {
    const res = await req(app).post('/users').send({})

    expect(res.status).toBe(400)
  })

  it('Listar ranking de usuarios deve ocorrer status 200', async () => {
    const res = await req(app).get('/users/ranking')

    expect(res.status).toBe(200)
  })
})