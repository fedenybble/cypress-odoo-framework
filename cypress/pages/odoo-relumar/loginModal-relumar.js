

class LoginModal{

    loginElements = {

        emailInput      : () => cy.get('#login'),
        passwordInput   : () => cy.get('#password'),
        iniciarSesionBtn: () => cy.get('.clearfix > .btn')  

    }

    login(email, password){
        this.loginElements.emailInput().type(email);
        this.loginElements.passwordInput().type(password);
        this.loginElements.iniciarSesionBtn().click();
    }

}

export const loginModal = new LoginModal();