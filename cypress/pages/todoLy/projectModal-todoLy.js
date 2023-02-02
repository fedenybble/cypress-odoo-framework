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
        cy.xpath('//ul[@id="mainProjectList"]/li[last()]//td[text()="'+newProjectName+'"]').should('have.text', newProjectName);
    }


    countProjects(){
        cy.xpath('//*[@id="mainProjectList"]').find('li').its('length').
        then((len) => {
            //cy.log("Numero de elementos "+len); 
            cy.xpath('//*[@id="mainProjectList"]').find('li').should("have.length", len);
        })
         
    }

}

export const projectModal = new ProjectModal();

