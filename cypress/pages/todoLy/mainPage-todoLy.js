class MainPageTodoLy{

    mainPageElements = {

        loginModalBtn : () => cy.get('.HPHeaderLogin > a > img'),
        loginErrorMsg : () => cy.get('.ui-state-error'),
        signUpModalBtn: () => cy.get('.HPHeaderSignup > a > img')

    }

    clickLoginModalBtn(){
        this.mainPageElements.loginModalBtn().click();
    }

    wrongLogin(){
        this.mainPageElements.loginErrorMsg().should("be.visible");
    }

    clickSignUpModalBtn(){
        this.mainPageElements.signUpModalBtn().click();
    }


}

export const mainPageTodoLy = new MainPageTodoLy();