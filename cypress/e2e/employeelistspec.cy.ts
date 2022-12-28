describe('Employee List Page', () => {
  it('Displays employee table', () => {
    cy.visit('/')
    cy.get('#employee-table').should('have.length',1);
  })

  it('Displays 3 employee records in employee table', () => {
    cy.visit('/')
    cy.get('[data-employee=employee-record]').should('have.length',3);
  })
})
