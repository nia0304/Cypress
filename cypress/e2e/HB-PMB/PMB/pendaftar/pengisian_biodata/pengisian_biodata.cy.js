describe("Pengisian Biodata", () => {

    beforeEach("login pendaftar", () => {
        //login
        cy.loginPendaftar()
    });

    it("Pengisian biodata pendaftar", () => {

        cy.fixture("pmb/data_pendaftar").then((data) => {

            cy.get('#select2-idagama-container').click()
            cy.get('.select2-search__field').type(data.agama)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.agama) {
                    cy.wrap($el).click()
                }
            })

            cy.get('#select2-idnegara-container').click()
            cy.get('.select2-search__field').type(data.wna)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.wna) {
                    cy.wrap($el).click()
                }
            })

            cy.get('#paspor').type(data.paspor)

            cy.get('#select2-idpekerjaan-container').click()
            cy.get('.select2-search__field').type(data.pekerjaan)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.pekerjaan) {
                    cy.wrap($el).click()
                }
            })

            cy.get('#instansi').clear().type(data.instansi)

            // klik lanjut 
            cy.get('.btn-warning').click()

            cy.get('#select2-idpropinsi-container').click()
            cy.get('.select2-search__field').type(data.propinsi)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.propinsi) {
                    cy.wrap($el).click()
                }
            })

            cy.get('#select2-idkota-container').click()
            cy.get('.select2-search__field').type(data.kota)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.kota) {
                    cy.wrap($el).click()
                }
            })

            cy.get('#select2-idkecamatan-container').click()
            cy.get('.select2-search__field').type(data.kecamatan)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.kecamatan) {
                    cy.wrap($el).click()
                }
            })

            cy.get('#desa').type(data.desa)
            cy.get('#dusun').type(data.dusun)
            cy.get('#rt').clear().type(data.dusun)
            cy.get('#rw').clear().type(data.dusun)
            cy.get('#kodepos').clear().type(data.kodepos)
            cy.get('#alamat').type(data.alamat)

            // klik lanjut 
            cy.get('.btn-warning').click()

            // nama ibu
            cy.get('#namakeluarga_I').type(data.namaibu)
            // pekerjaan ibu
            cy.get('#select2-pekerjaan_I-container').click()
            cy.get('.select2-search__field').type(data.pekerjaan_ibu)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.pekerjaan_ibu) {
                    cy.wrap($el).click()
                }
            })
            // penghasilan ibu
            cy.get('#select2-idpenghasilan_I-container').click()
            cy.get('.select2-search__field').type(data.penghasilan_ibu)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.penghasilan_ibu) {
                    cy.wrap($el).click()
                }
            })
            // nama ayah
            cy.get('#namakeluarga_A').type(data.namaayah)
            // pekerjaan ayah
            cy.get('#select2-pekerjaan_A-container').click()
            cy.get('.select2-search__field').type(data.pekerjaan_ayah)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.pekerjaan_ayah) {
                    cy.wrap($el).click()
                }
            })
            // penghasilan ayah
            cy.get('#select2-idpenghasilan_A-container').click()
            cy.get('.select2-search__field').type(data.penghasilan_ayah)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.penghasilan_ayah) {
                    cy.wrap($el).click()
                }
            })

            // klik lanjut
            cy.get('.btn-warning').click()

            cy.get('#nisn').type(data.nisn)
            cy.get('#nilai').type(data.nilai)

            // klik lanjut
            cy.get('.btn-warning').click()

            // klik simpan
            cy.get('.btn-warning').click()
   
        })
        

    })
})