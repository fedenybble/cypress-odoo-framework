class MainPageTodoLy{

    mainPageElements = {

        loginModalBtn: () => cy.get('.HPHeaderLogin > a > img'),
        loginErrorMsg: () => cy.get('.ui-state-error')

    }

    clickLoginModalBtn(){
        this.mainPageElements.loginModalBtn().click();
    }

    nonRegisteredAccount(){
        this.mainPageElements.loginErrorMsg().should("be.visible");
    }

}

export const mainPageTodoLy = new MainPageTodoLy();