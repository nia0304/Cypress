/// <reference types="cypress"/>

describe("Penambahan informasi saat menggunakan fitur Login As", ()=> {
    beforeEach(() => {
        cy.loginsuperadmin()
        cy.moduladminaplikasi()
        cy.visit('http://localhost/siacloud/admin/set_loginas');
    });

    it('Admin login As user yang sudah tidak aktif', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#userid_label').type(data.user_nonaktif)
            cy.get('.tt-suggestion').each(($el)=>{
                if($el.text() === data.hasil_usernonaktif1 + data.hasil_usernonaktif2){
                    cy.wrap($el).click()
                }
            })
            cy.get('[data-cy="btn-login"]').click()
            cy.get('[data-cy="desk-alert"]').should('contain', data.alert_nonaktif)
            cy.get('[data-cy="desk-alert"] > a').click()
        })
    });

    it('Admin login As user yang tidak memiliki role', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#userid_label').type(data.user_nonrole)
            cy.get('.tt-suggestion').each(($el)=>{
                if($el.text() === data.hasil_nonrole1 + data.hasil_nonrole2 + data.hasil_nonrole3 + data.hasil_nonrole4){
                    cy.wrap($el).click()
                }
            })
            cy.get('[data-cy="btn-login"]').click()
            cy.get('[data-cy="desk-alert"]').should('contain', data.alert_nonrole)
            cy.get('[data-cy="desk-alert"] > a').click()
        })
    }); 
    
    it('Admin login As user yang sudah kadaluarsa/expired', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#userid_label').type(data.user_expired)
            cy.get('.tt-suggestion').each(($el)=>{
                if($el.text() === data.hasil_userexp1 + data.hasil_userexp2 + data.hasil_userexp3){
                    cy.wrap($el).click()
                }
            })
            cy.get('[data-cy="btn-login"]').click()
            cy.get('[data-cy="desk-alert"]').should('contain', data.alert_userexp)
            cy.get('[data-cy="desk-alert"] > a').click()
        })
    }); 
    
})