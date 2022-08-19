describe("Limit NIK periode pendaftaran", () => {

    beforeEach("Login Dosen", () => {
        // open spmbfront
        cy.visit('/spmbfront/')
    });

    it("Peringatan bahwa NIK sudah pernah didaftar 1x  pada periode yang sama", () => {
        cy.get(':nth-child(2) > [href="/siacloud/spmbfront/jalur-seleksi"] > p').click()

        cy.fixture("pmb/data_formulir").then((data) => {
            // this.data = data
            cy.log('data nama', data.nama_jalur)
            var index03 = null
            cy.get('.pos-content-top01 .namaperiode').each(($el, index, $list) => {
                cy.log($el.text()=== data.nama_jalur, index)
                if ($el.text() === data.nama_jalur) {
                    index03 = index;

                    // cara 1
                    cy.get('.pos-content-top01 .card-footer :nth-child(2) .btn-primary').eq(index03).click()
                }
            })

            cy.get('#namapendaftar').type(data.namapendaftar)
            // field jk
            cy.get('#jk_P').check()
            // field nohp
            cy.get('#nohp').type(data.nohp)
            // field email
            cy.get('#email').type(data.email)
            // field tgl lahir
            cy.get('#tgllahir').clear().type(data.tgllahir).tab()
            // field nik
            cy.get('#nik').type(data.nik)
            // field tempat tgl lahir
            cy.get('#tmplahir').type(data.tmplahir)

            // klik lanjut
            cy.get(':nth-child(2) > .btn').click()

            cy.get('.text-help').should('contain', 'NIK / No. KTP 1234781378136812 telah terdaftar 1 kali')
        })

    })

    it("Pendaftar dapat melakukan pendaftaran dengan NIK sama pada periode yang sama", () => {
        cy.get(':nth-child(2) > [href="/siacloud/spmbfront/jalur-seleksi"] > p').click()

        cy.fixture("pmb/data_formulir").then((data) => {
            // this.data = data
            cy.log('data nama', data.nama_jalur)
            var index03 = null
            cy.get('.pos-content-top01 .namaperiode').each(($el, index, $list) => {
                cy.log($el.text()=== data.nama_jalur, index)
                if ($el.text() === data.nama_jalur) {
                    index03 = index;

                    // cara 1
                    cy.get('.pos-content-top01 .card-footer :nth-child(2) .btn-primary').eq(index03).click()
                }
            })

            cy.get('#namapendaftar').type(data.namapendaftar)
            // field jk
            cy.get('#jk_P').check()
            // field nohp
            cy.get('#nohp').type(data.nohp)
            // field email
            cy.get('#email').type(data.email)
            // field tgl lahir
            cy.get('#tgllahir').clear().type(data.tgllahir).tab()
            // field nik
            cy.get('#nik').type(data.nik)
            // field tempat tgl lahir
            cy.get('#tmplahir').type(data.tmplahir)

            // klik lanjut
            cy.get(':nth-child(2) > .btn').click()

            
        })

    })

    it("Pendaftar dapat melakukan pendaftaran dengan NIK sama pada periode yang berbeda", () => {
        cy.get(':nth-child(2) > [href="/siacloud/spmbfront/jalur-seleksi"] > p').click()

        cy.fixture("pmb/data_formulir").then((data) => {
            // this.data = data
            cy.log('data nama', data.nama_jalur_kedua)
            var index03 = null
            cy.get('.pos-content-top01 .namaperiode').each(($el, index, $list) => {
                cy.log($el.text()=== data.nama_jalur_kedua, index)
                if ($el.text() === data.nama_jalur_kedua) {
                    index03 = index;

                    // cara 1
                    cy.get('.pos-content-top01 .card-footer :nth-child(2) .btn-primary').eq(index03).click()
                }
            })

            cy.get('#namapendaftar').type(data.namapendaftar)
            // field jk
            cy.get('#jk_P').check()
            // field nohp
            cy.get('#nohp').type(data.nohp)
            // field email
            cy.get('#email').type(data.email)
            // field tgl lahir
            cy.get('#tgllahir').clear().type(data.tgllahir).tab()
            // field nik
            cy.get('#nik').type(data.nik_baru)
            // field tempat tgl lahir
            cy.get('#tmplahir').type(data.tmplahir)

            // klik lanjut
            cy.get(':nth-child(2) > .btn').click()

            
        })

    })
})
