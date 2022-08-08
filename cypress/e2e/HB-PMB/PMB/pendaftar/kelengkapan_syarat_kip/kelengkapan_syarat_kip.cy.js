describe("Pengisian Biodata", () => {

    beforeEach("login pendaftar", () => {
        //login
        cy.loginPendaftar()
    });

    it("Melewati step kip", () => {
        cy.log('')
        cy.get('.side-menu > ul > :nth-child(3) > a')
            .invoke('removeAttr', 'target')
            .click()
        
        cy.get('.main-header').should('contain', 'KIP Kuliah')

        // lewati kip kuliah
        cy.get('.btn-tolak-kip').click()

        // assert di modal 
        cy.get('.modal-title').should('contain', 'Apakah anda yakin tidak ingin mendaftar KIP kuliah ?')

        // aksi ya lewati KIP
        cy.get('.btn-primary').click()

        // aksi batal lewati KIP 
        // cy.get('.btn-danger').click()


    })

    it("Daftar KIP Kuliah", () => {
        cy.get('.side-menu > ul > :nth-child(3) > a')
            .invoke('removeAttr', 'target')
            .click()
        
        cy.get('.main-header').should('contain', 'KIP Kuliah')

        // daftar KIP kuliah
        cy.get('.btn-terima-kip').click()

        cy.get('h4[class="modal-title"]').should('have.text', 'Apakah anda yakin ingin mendaftar KIP kuliah ?')

        // aksi ya lewati KIP
        cy.get('.btn-primary').click().wait(3000)

        // aksi batal lewati KIP 
        // cy.get('.btn-danger').click()

    })

    it("Batal mengikuti KIP Kuliah", () => {
        cy.get('.side-menu > ul > :nth-child(3) > a')
            .invoke('removeAttr', 'target')
            .click()
        
        cy.get('.main-header').should('contain', 'KIP Kuliah')

        cy.get('.inline').click()

        cy.get('.bootbox-body').should('contain', 'Apakan Anda membatalkan mengikuti program KIP Kuliah?')

        // aksi OK
        cy.get('.btn-primary').click()

        // aksi cancel
        // cy.get('.btn-default').click()

    })

    it("mengikuti kembali KIP Kuliah", () => {
        cy.get('.side-menu > ul > :nth-child(3) > a')
            .invoke('removeAttr', 'target')
            .click()
        
        cy.get('.main-header').should('contain', 'KIP Kuliah')
        
        // aksi centang persetujuan 
        cy.get('#filled-in-box').click()

        cy.get('.inline').click()

        cy.get('.bootbox-body').should('contain', 'Apakah Anda menyetujui dan menyatakan bahwa mengikuti program KIP Kuliah?')

        // aksi OK
        cy.get('.btn-primary').click()

        // aksi cancel
        // cy.get('.btn-default').click()

    })

    it("Upload berkas KIP Kuliah", () => {
        cy.get('.side-menu > ul > :nth-child(3) > a')
            .invoke('removeAttr', 'target')
            .click()
        
        cy.get('.main-header').should('contain', 'KIP Kuliah')

        // klik ubah berkas
        cy.get('.text-right > .btn').click()

        // upload berkas pertama
        cy.get(':nth-child(1) > .berkas-list-item > .decs-table > .btn').click()
        const img1 = "Images/minion 3.jpg";
        cy.get(':nth-child(1) > .berkas-list-item > .decs-table > input[type=file]').attachFile(img1).wait(2000)

        // upload berkas kedua
        cy.get(':nth-child(2) > .berkas-list-item > .decs-table > .btn').click()
        const berkas = "File Upload/lorem-ipsum.pdf";
        cy.get(':nth-child(2) > .berkas-list-item > .decs-table > input[type=file]').attachFile(berkas).wait(2000)

        // button simpan
        cy.get('.text-right > .btn-warning').click()

        // assert modal
        cy.get('.bootbox-body').should('contain', 'Apakah anda yakin akan menyimpan data ini?')

        // klik aksi ok
        cy.get('.btn-primary').click()

        // klik aksi cancel
        // cy.get('.modal-footer > .btn-default').click()

        // assert 
        cy.get('.alert').should('contain', 'Berhasil upload dokumen KIP Kuliah')

        // button batal 
        // cy.get('.btn-success').click()


    })


})