import { mainPageTodoLy } from "../../pages/todoLy/mainPage-todoLy";
import { navBarTodoLy } from "../../pages/todoLy/navBar-todoLy";
import { signUpModal } from "../../pages/todoLy/signUpModal-todoLy";

describe("Sign Up Suite", {tags: "@SignUpSuite"},() => {

    beforeEach(() => {
        cy.visit("http://todo.ly/");
    })

    it("Verify that the user can sign up correctly", {tags: "@PositiveTest"}, () => {
        mainPageTodoLy.clickSignUpModalBtn();
        let randomString = makeRandomString(7);
        signUpModal.signUpCorrectly(randomString, randomString+"@gmail.com", randomString);
        navBarTodoLy.verifyLoginCorrectly();
    });

    it("Verify that the user can not sign up without entering an email", {tags: "@NegativeTest"}, () =>{

        mainPageTodoLy.clickSignUpModalBtn();
        let randomString = makeRandomString(7);
        signUpModal.signUpWithoutEmail(randomString, randomString);
        mainPageTodoLy.wrongLogin();
    });

    it("Verify that the user can not sign up without entering the Full Name", {tags: "@NegativeTest"}, () => {
        mainPageTodoLy.clickSignUpModalBtn();
        let randomString = makeRandomString(7);
        signUpModal.signUpWithoutFullName(randomString+"@gmail.com", randomString);
        mainPageTodoLy.wrongLogin();
    });


});

    // Function that creates random strings
    function makeRandomString(length) {
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