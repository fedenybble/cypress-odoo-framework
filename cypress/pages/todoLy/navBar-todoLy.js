class NavBarTodoLy{

    navBarElements = {

        logoutBtn: () => cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout')


    }

    verifyLoginCorrectly(){
        this.navBarElements.logoutBtn().should("be.visible");
    }

}

export const navBarTodoLy = new NavBarTodoLy();