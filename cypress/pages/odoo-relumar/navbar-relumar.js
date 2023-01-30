class Navbar{

    navbarElements = {
        profileOption: () => cy.get('.o_menu_systray > .o-dropdown > .dropdown-toggle'),
        logoutButton : () => cy.get('[href="https://relumar-dev.nybblegroup.com/web/session/logout"]')
    }

}

export const navbar = new Navbar();