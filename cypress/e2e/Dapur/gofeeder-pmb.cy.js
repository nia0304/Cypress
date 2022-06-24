/// <reference types="cypress" />

describe('File Upload', () => {
    it('Upload File', () => {
        const filetranskrip = "File Upload/lorem-ipsum.pdf";
        cy.visit("https://demo.gofeedercloud.com/index.php/pendaftaran_pmb/login");
        cy.get('#username').type('0910532110006');
        cy.get('#password').type('20000512');
        cy.get(".btn-primary").click();
        cy.visit("https://demo.gofeedercloud.com/index.php/pendaftaran_pmb/berkaspmb");
        cy.get(':nth-child(1) > :nth-child(8) > .btn-upload').click();
        cy.get('#file_berkas_2').attachFile(filetranskrip);
        cy.get('tbody > :nth-child(1) > :nth-child(5)').should('contain', 'cmb_file');
    })
})

