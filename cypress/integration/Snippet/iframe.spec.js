describe('Tes Iframe gofeeder', () => {
    const getIframeDocument = () => {
        return cy
            .get('.cke_wysiwyg_frame')
            // Cypress yields jQuery element, which has the real
            // DOM element under property "0".
            // From the real DOM iframe element we can get
            // the "document" element, it is stored in "contentDocument" property
            // Cypress "its" command can access deep properties using dot notation
            // https://on.cypress.io/its
            .its('0.contentDocument').should('exist')
    }

    const getIframeBody = () => {
        // get the document
        return getIframeDocument()
            // automatically retries until body is loaded
            .its('body').should('not.be.undefined')
            // wraps "body" DOM element to allow
            // chaining more Cypress commands, like ".find(...)"
            .then(cy.wrap)
    }
    it('tes iframe', () => {
        cy.visit('https://demo.gofeedercloud.com');
        cy.get(':nth-child(3) > input').type("VenomSymbiote")
        cy.get('#password-field').type("SemuaBeres2016")
        cy.get('.col-lg-8 > .btn-login').click()
        cy.visit("https://demo.gofeedercloud.com/index.php/pmb/addPeriodePendaftaran")
        cy.get(".cke_wysiwyg_frame")
        getIframeBody().type("Random Text")
    });
});