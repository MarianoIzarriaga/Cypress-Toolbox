describe('API Test - /qa/test3', () => {

  it('Debería fallar sin token de autorización', () => {
    cy.request({
      method: 'GET',
      url: 'https://echo-serv.tbxnet.com/v1/qa/test3',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body).to.have.property('code')
      expect(response.body).to.have.property('message')
    })
  })

// Este test intenta verificar el comportamiento exitoso con token válido.
// Actualmente falla porque la API requiere una API Key válida, la cual no fue provista.
// Se deja el test como referencia de análisis, documentando el comportamiento no permitido.

  it('Debería responder correctamente con token válido', () => {
    const start = Date.now()

    cy.request({
      method: 'GET',
      url: 'https://echo-serv.tbxnet.com/v1/qa/test3',
      headers: {
        Authorization: 'abc123',
        accept: 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      const duration = Date.now() - start

      expect(response.status).to.eq(200)
      expect(duration).to.be.lessThan(3000)
      expect(response.headers['content-type']).to.include('application/json')
      expect(response.body).to.have.property('ok', true)
      expect(response.body).to.have.property('date')
    })
  })
})