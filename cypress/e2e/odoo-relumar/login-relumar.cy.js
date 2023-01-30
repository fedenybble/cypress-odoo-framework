import { loginModal } from "../../pages/odoo-relumar/loginModal";
import { mainPage } from "../../pages/odoo-relumar/mainPage";
import { navbar } from "../../pages/odoo-relumar/navbar";


describe('Login Test', () => {

   beforeEach(() => {
    cy.visit('https://relumar-dev.nybblegroup.com/');
  });

  it('The user can login correctly with an [Admin] account', () => {

    mainPage.clickLoginButton();
    loginModal.login("admin", "159753");

    navbar.navbarElements.profileOption().click();
    navbar.navbarElements.logoutButton().should('be.visible');

    
  });
 
/*   it('The user can login with an E2E User account', () => {

    cy.get('.ml-lg-auto > .nav-link').click();
    cy.get('#login').type("federico.padin@nybblegroup.com");
    cy.get('#password').type("159753");
    cy.get('.clearfix > .btn').click();

  }) */

})