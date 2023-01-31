class SignUpModal{

    signUpModalElements = {
        fullNameTextBox : () => cy.get('#ctl00_MainContent_SignupControl1_TextBoxFullName'),
        emailTextBox    : () => cy.get('#ctl00_MainContent_SignupControl1_TextBoxEmail'),
        passwordTextBox : () => cy.get('#ctl00_MainContent_SignupControl1_TextBoxPassword'),
        checkBoxTerms   : () => cy.get('#ctl00_MainContent_SignupControl1_CheckBoxTerms'),
        signUpBtn       : () => cy.get('#ctl00_MainContent_SignupControl1_ButtonSignup')
    }

    signUpCorrectly(fullName, email, password){
        this.signUpModalElements.fullNameTextBox().type(fullName);
        this.signUpModalElements.emailTextBox().type(email);
        this.signUpModalElements.passwordTextBox().type(password);
        this.signUpModalElements.checkBoxTerms().click();
        this.signUpModalElements.signUpBtn().click();
    }

    signUpWithoutEmail(fullname, password){
        this.signUpModalElements.fullNameTextBox().type(fullname);
        this.signUpModalElements.passwordTextBox().type(password);
        this.signUpModalElements.checkBoxTerms().click();
        this.signUpModalElements.signUpBtn().click();
    }
    signUpWithoutFullName(email, password){
        this.signUpModalElements.emailTextBox().type(email);
        this.signUpModalElements.passwordTextBox().type(password);
        this.signUpModalElements.checkBoxTerms().click();
        this.signUpModalElements.signUpBtn().click();
    }

}
export const signUpModal = new SignUpModal();

