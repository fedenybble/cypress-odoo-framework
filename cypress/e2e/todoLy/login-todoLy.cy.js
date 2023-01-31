
import { loginModalTodoLy } from "../../pages/todoLy/loginModal-todoLy";
import { mainPageTodoLy } from "../../pages/todoLy/mainPage-todoLy";
import { navBarTodoLy } from "../../pages/todoLy/navBar-todoLy";


describe("Login Test Suite", {tags: "@LoginSuite"} ,() => {

    beforeEach(() => {
        cy.visit("http://todo.ly/");
    })

    it("Verify that the user can login with a registered account", {tags: "@PositiveTest"},() => {
        mainPageTodoLy.clickLoginModalBtn();
        loginModalTodoLy.loginAction("ejemplo@ejemplo.com", "ejemplo");
        navBarTodoLy.verifyLoginCorrectly();
    });

    it("Verify that the user can not login with a non-registered account", {tags: "@NegativeTest"},() => {
        let randomString = makeString(5);
        mainPageTodoLy.clickLoginModalBtn();
        loginModalTodoLy.loginAction(randomString+"@gmail.com", "password");
        mainPageTodoLy.wrongLogin();
    });

    it("Verify that the user can not login if he does not enter a Password", {tags: "@NegativeTest"}, () => {
        let randomString = makeString(5);
        mainPageTodoLy.clickLoginModalBtn();
        loginModalTodoLy.loginWithouPassword("ejemplo@ejemplo.com");
        mainPageTodoLy.wrongLogin();
    })
});

// Function that creates random strings
function makeString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


