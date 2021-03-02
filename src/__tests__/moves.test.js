const req = require('supertest')
const { app } = require('../app')

describe('Moves', () => {

  it('Alterar os dados de level xp e desaios deve ocorrer status 200', async () => {
    const res = await req(app).put('/moves').send({
      "userId": 1,
      "currentExperience": 90,
      "challengesCompleted": 50,
      "level": 2
    })

    expect(res.status).toBe(200)
  })

  it('Alterar os dados de level xp e desaios deve ocorrer erro status 400', async () => {
    const res = await req(app).put('/moves').send({
      "currentExperience": 90,
      "challengesCompleted": 50,
      "level": 2
    })

    expect(res.status).toBe(400)
  })
})