
describe('Login Test', () => {



  it('clicking "type" navigates to a new url', () => {


    cy.visit('https://relumar-dev.nybblegroup.com/');

    cy.get('.ml-lg-auto > .nav-link').click();
    cy.get('#login').type("admin");
    cy.get('#password').type("159753");
    cy.get('.clearfix > .btn').click();

    
  })
})