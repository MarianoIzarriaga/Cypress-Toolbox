describe('Registro de usuario', () => {
  it('Debería registrar un nuevo usuario correctamente', () => {
    cy.visit('https://automationexercise.com')

    cy.contains('Signup / Login').click()

    cy.get('[data-qa="signup-name"]').type('Nombre QA')
    cy.get('[data-qa="signup-email"]').type('mariano' + Date.now() + '@mail.com')
    cy.get('[data-qa="signup-button"]').click()

    cy.get('#id_gender1').check()
    cy.get('#password').type('Contrasena123')

    cy.get('#days').select('10')    
    cy.get('#months').select('5')    
    cy.get('#years').select('1995')  

    cy.get('#newsletter').check() 
    cy.get('#optin').check()          

    cy.get('#first_name').type('Rodrigo')
    cy.get('#last_name').type('Lopes')
    cy.get('#company').type('Pepsi')
    cy.get('#address1').type('Calle 123')
    cy.get('#country').select('Canada') 
    cy.get('#state').type('Ontario')
    cy.get('#city').type('Toronto')
    cy.get('#zipcode').type('ABC123')
    cy.get('#mobile_number').type('1234567890')

    cy.get('[data-qa="create-account"]').click()

    cy.contains('Account Created!').should('be.visible')
    cy.screenshot('registro-exitoso')
  })
})