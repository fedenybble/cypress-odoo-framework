class ProjectModal{

    projectModalElements = {
        addNewProjectBtn    : () => cy.get('.AddProjectLiDiv > .ProjItemTable > tbody > tr > .ProjItemContent'),
        newProjectNameInput : () => cy.get('#NewProjNameInput'),
        newProjectNameBtn   : () => cy.get('#NewProjNameButton')
    }

    createNewProject(newProjectName){
        this.projectModalElements.addNewProjectBtn().click();
        this.projectModalElements.newProjectNameInput().type(newProjectName);
        this.projectModalElements.newProjectNameBtn().click();
    }

    verifyNewProjectCreatedOK(newProjectName){
        cy.xpath('//div[@id="ProjectListPlaceHolder"]//ul[@id="mainProjectList"]/li[last()]').should('contain.text', newProjectName);
    }

    countProjects(){
        cy.xpath('//*[@id="mainProjectList"]').find('li').its('length').
        then((len) => {
            cy.log("Numero de elementos "+len); //prints length
        })
    }


}







export const projectModal = new ProjectModal();
