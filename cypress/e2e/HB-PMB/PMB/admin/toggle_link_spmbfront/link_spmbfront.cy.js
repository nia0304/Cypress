/// <reference types="cypress"/>

describe('tes klik link spmbfront' , () => {
    beforeEach(() => {
        //login
        cy.loginUserSuperAdmin()
        //open PMB module
        cy.openModulPmb()
    });

    it('Buka link ke spmbfront', () => {
        cy.get('#btn-spmbfront').click({force: true})
        
    });

});

