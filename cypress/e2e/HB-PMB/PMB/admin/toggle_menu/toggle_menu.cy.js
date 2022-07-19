/// <reference types="cypress"/>

describe('tes klik toggle menu' , () => {
    beforeEach(() => {
        //login
        cy.loginUserSuperAdmin()
        //open PMB module
        cy.openModulPmb()
    });

    it('Buka link ke toggle menu', () => {
        cy.get('#toggle-menu').click({force: true})
        
    });

});

