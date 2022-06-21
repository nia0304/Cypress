/// <reference types="cypress"/>

describe("Perbaikan Rekap Percakapan Bimbingan di Tugas Akhir", ()=> {
    beforeEach(() => {
        cy.loginsuperadmin()
        cy.moduladminaplikasi()
        cy.visit('http://localhost/siacloud/admin/set_loginas');
    });

    it('Admin login As user yang sudah tidak aktif', () => {
        cy.get('#userid_label').type("KARIYA")
        cy.get('.tt-suggestion').each(($el)=>{
            if($el.text() === "0003940600039737" + " - KARIYA"){
                cy.wrap($el).click()
            }
        })
        cy.get('[data-cy="btn-login"]').click()
        cy.get('[data-cy="desk-alert"]').should('contain', 'Akun yang digunakan saat ini tidak aktif. Lihat Data Pengguna')
        cy.get('[data-cy="desk-alert"] > a').click()
    });

    it('Admin login As user yang tidak memiliki role', () => {
        cy.get('#userid_label').type("kiara")
        cy.get('.tt-suggestion').each(($el)=>{
            if($el.text() === "kiara" + " - " + "Kiara" + " Sevima"){
                cy.wrap($el).click()
            }
        })
        cy.get('[data-cy="btn-login"]').click()
        cy.get('[data-cy="desk-alert"]').should('contain', 'Akun yang digunaksan saat ini belum memiliki Role. Lihat Data Pengguna')
        cy.get('[data-cy="desk-alert"] > a').click()
    }); 
    
    it('Admin login As user yang sudah kadaluarsa/expired', () => {
        cy.get('#userid_label').type("avatar")
        cy.get('.tt-suggestion').each(($el)=>{
            if($el.text() === "avatar" + " - " + "Avatar"){
                cy.wrap($el).click()
            }
        })
        cy.get('[data-cy="btn-login"]').click()
        cy.get('[data-cy="desk-alert"]').should('contain', 'Akun yang digunakan telah kadaluarsa sejak tanggal 31 December 2021. Lihat Data Pengguna')
        cy.get('[data-cy="desk-alert"] > a').click()
    }); 
    
})