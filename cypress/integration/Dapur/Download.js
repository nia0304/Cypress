/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

describe('download file', ()=> {
    beforeEach("Login Siakad", () => {
        cy.login();
        cy.modulpmb();
    });
    it('download', ()=> {
        cy.visit("/spmb/set_registrasi");
        cy.get('#idpendaftar_label').type('khalil')
        cy.get('.tt-suggestions div').each(($el, index, $list) => {
			if ($el.text() === '202411001 - KHALIL GIBRAN') {
			cy.wrap($el).click()
			}
		})
        cy.get('.input-group-btn > .btn').click()
        cy.downloadFile('http://localhost/siacloud/spmb/../uploads//fileadministrasi/35415_14','cypress/downloads','lorem-ipsum.pdf')
        
        const fileName = 'cypress/downloads/lorem-ipsum.pdf'
        // cy.log(fileName) 
        cy.readFile(fileName)
    
    })
})