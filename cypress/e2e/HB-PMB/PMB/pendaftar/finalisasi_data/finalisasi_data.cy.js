describe("Pengisian Biodata", () => {

    beforeEach("login pendaftar", () => {
        //login
        cy.loginPendaftar()
    });

    it("Memeriksa kembali data pendaftar", () => {
        cy.log('')
        cy.get('.side-menu > ul > :nth-child(4) > a')
            .invoke('removeAttr', 'target')
            .click()
        
        cy.get('#filled-in-box').click()

        // cy.get('#confirm-button').click()

        cy.get('#back-button').invoke('removeAttr', 'target').click()
        cy.url().should('contain', '/spmbfront/biodata')

    })

    it("Finalisasi data pendaftar", () => {
        cy.log('')
        cy.get('.side-menu > ul > :nth-child(4) > a')
            .invoke('removeAttr', 'target')
            .click()
        
        cy.get('#filled-in-box').click()

        cy.get('#confirm-button').click()

        // assert modal
        cy.get('.bootbox-body').should('contain', 'Setelah anda melakukan pengumpulan data, semua data tidak dapat diubah kembali dan dianggap sebagai data yang benar.')

        // klik aksi ok
        cy.get('.btn-primary').click()

        // klik aksi cancel
        // cy.get('.btn-default').click()


    })

    it("Finalisasi data pendaftar", () => {
        cy.get('.side-menu > ul > :nth-child(4) > a')
            // .invoke('removeAttr', 'target')
            .click()
        
        cy.get('#form-administrasi > div > div > a')
        .invoke('removeAttr', 'target')
        .click()

        // cy.get('#form-administrasi > div > div > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/spmbfront/cetak-formulir')

        // pengecekan new tab 
        // cy.get(':nth-child(1) > .col-md-7 > .action > .button > .ripple').invoke('removeAttr', 'target').click()
        // pengecekan url  
        // cy.url().should('include', 'https://dev-pmb-v2.siakadcloud.com/spmb/one_day_service')

    })

    
})