describe("Pengisian Biodata", () => {

    beforeEach("login pendaftar", () => {
        //login
        cy.loginPendaftar2()
    });

    it("Kelengkapan syarat pendaftar", () => {

        //get dan klik href berkas administrasi
        cy.get('.side-menu > ul > :nth-child(2) > a')
            .invoke('removeAttr', 'target')
            .click()
        cy.get('.main-header').should('contain', 'BERKAS ADMINISTRASI')

        cy.fixture("pmb/data_pendaftar").then((data) => {
            cy.get('.col-md-6 > .summary-value').should('contain', data.namapendaftar)


            cy.get('.desc-table > .btn').click()
            const filepath = 'Images/minion 3.jpg'
            cy.get('#tabelBerkas > tbody > tr > td.text-center.berkas-list-item > div.desc-table > input[type=file]').attachFile(filepath)

            cy.get('div[id="fileList-filesyarat[14]"]').click({ force: true })
            const img1 = "Images/minion 3.jpg";
            cy.get('#tabelBerkas > tbody > tr:nth-child(3) > td.text-center.berkas-list-item > div.decs-table > input[type=file]').attachFile(img1).wait(2000)

            cy.get('div[id="fileList-filesyarat[10]"]').click({ force: true })
            const img2 = "Images/minion 3.jpg";
            cy.get('#tabelBerkas > tbody > tr:nth-child(6) > td.text-center.berkas-list-item > div.decs-table > input[type=file]').attachFile(img2).wait(2000)

            var index04 = null
            cy.get('.text-warning > select[id="pilihan[27]"]').select(data.almamater)
            
            // klik simpan 
            cy.get('.btn-warning').click()

            // cek keterangan modal 
            cy.get('.bootbox-body').should('contain', 'Apakah anda yakin akan menyimpan data ini?')

            // klik ok pada modal 
            cy.get('.btn-primary').click()

            // cek berhasil 
            cy.get(':nth-child(1) > .alert').should('contain', 'Berhasil upload dokumen administrasi')
        })


    })
})