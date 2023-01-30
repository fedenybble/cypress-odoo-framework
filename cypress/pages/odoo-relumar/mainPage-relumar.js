class MainPage{

    mainPageElements = {

        loginButton: () => cy.get('.ml-lg-auto > .nav-link')

    }

    clickLoginButton(){
        this.mainPageElements.loginButton().click();
    }

}

export const mainPage = new MainPage();