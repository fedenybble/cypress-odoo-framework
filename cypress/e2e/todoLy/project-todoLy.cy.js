import { loginModalTodoLy } from "../../pages/todoLy/loginModal-todoLy";
import { mainPageTodoLy } from "../../pages/todoLy/mainPage-todoLy";
import { navBarTodoLy } from "../../pages/todoLy/navBar-todoLy";
import { projectModal } from "../../pages/todoLy/projectModal-todoLy";

describe("Project's Suite", {tags: "@ProjectsSuite"}, () => {

    beforeEach(() => {
        cy.visit("http://todo.ly/");
        mainPageTodoLy.clickLoginModalBtn();
        loginModalTodoLy.loginAction("ejemplo@ejemplo.com", "ejemplo");
        navBarTodoLy.verifyLoginCorrectly();
    });

    it("Verify that the user can create a new project after being logged in", () => {
        let randomString = makeString(7);
        projectModal.countProjects();
        projectModal.createNewProject(randomString);
        projectModal.verifyNewProjectCreatedOK(randomString);
        projectModal.countProjects();
    });

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