describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click()
    cy.get('.display').should('contain', '2')
  })

  it('Should show a running total when number buttons are clicked', () => {
    cy.get('#number2').click()
    cy.get('#number3').click()
    cy.get('.display').should('contain', '23')
  })

  it('should be able to correctly do an multiplication sum', () => {
    cy.get('#number3').click()
    cy.get('#operator-multiply').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '18')
  })
  
    it('should be able to correctly do an addition sum', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '8')
  })
  
    it('should be able to correctly do an division sum', () => {
    cy.get('#number9').click()
    cy.get('#operator-divide').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '3')
  })
  
    it('should be able to correctly do an subtraction sum', () => {
    cy.get('#number8').click()
    cy.get('#operator-subtract').click()
    cy.get('#number1').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '7')
  })

  it('should be able to do multiple sums together', () => {
    cy.get('#number3').click()
    cy.get('#operator-multiply').click()
    cy.get('#number6').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '20')
  })

it('should be able to display a negative number', () => {
    cy.get('#number1').click()
    cy.get('#operator-subtract').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-5')
})

it('should be able to display a decimal number', () => {
  cy.get('#number3').click()
  cy.get('#decimal').click()
  cy.get('#number1').click()
  cy.get('.display').should('contain', '3.1')
})

it('should be able to display a very large number', () => {
  cy.get('#number3').click()
  cy.get('#number8').click()
  cy.get('#number6').click()
  cy.get('#number1').click()
  cy.get('#number2').click()
  cy.get('#number1').click()
  cy.get('#operator_add').click()
  cy.get('#number1').click()
  cy.get('#number2').click()
  cy.get('#number8').click()
  cy.get('#number6').click()
  cy.get('#number3').click()
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', '398984')
})

it('Should be able to divide by 0', () => {
  cy.get('#number2').click()
  cy.get('#operator-divide').click()
  cy.get('#number0').click()
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', 'Error')
})

})




