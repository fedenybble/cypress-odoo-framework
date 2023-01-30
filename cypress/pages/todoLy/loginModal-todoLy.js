class LoginModalTodoLy{

    loginModalElements = {

        emailTextBox    : () => cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail'),
        passwordTextBox : () => cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword'),
        loginModalBtn   : () => cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin')

    }

    loginAction(username, password){

        this.loginModalElements.emailTextBox().type(username);
        this.loginModalElements.passwordTextBox().type(password);
        this.loginModalElements.loginModalBtn().click();

    }

}

export const loginModalTodoLy = new LoginModalTodoLy();