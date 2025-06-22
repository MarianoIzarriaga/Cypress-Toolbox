describe('API Test - /qa/test1', () => {
  it('Debería devolver status 200, en menos de 3 segundos', () => {
    const start = Date.now()

    cy.request({
      method: 'GET',
      url: 'https://echo-serv.tbxnet.com/v1/qa/test1',
      headers: {
        accept: 'application/json'
      }
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