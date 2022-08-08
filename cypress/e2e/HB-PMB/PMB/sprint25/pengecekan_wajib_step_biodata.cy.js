describe("Pengisian Biodata", () => {

    beforeEach("login pendaftar", () => {
        //login
        cy.loginPendaftar2()
    });

    it("Pendaftar belum melengkapi data pada step pengisian identitas diriaksi klik lanjut", () => {

        // klik lanjut 
        cy.get('.btn-warning').click()

        cy.get('.bootbox-body').should('contain', 'Mohon mengisi isian yang bergaris merah')
        cy.get('.modal-footer > .btn').click()


    })

    it("Pendaftar belum melengkapi data pada step pengisian identitas diriaksi klik dari step icon", () => {

        // klik dari icon step 
        cy.get(':nth-child(3) > .f1-step-icon').click()

        cy.get('.bootbox-body').should('contain', 'Mohon mengisi isian yang bergaris merah')
        cy.get('modal-content > .modal-footer > .btn').click()

    })

    it("pendaftar melengkapi step pertama dan langsung lanjut ke step terakhir", () => {

        cy.fixture("pmb/data_pendaftar").then((data) => {
            cy.get('#select2-idagama-container').click()
            cy.get('.select2-search__field').type(data.agama_pendaftar2)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.agama_pendaftar2) {
                    cy.wrap($el).click()
                }
            })

            cy.get('#select2-idnegara-container').click()
            cy.get('.select2-search__field').type(data.kewarganegaraan)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.kewarganegaraan) {
                    cy.wrap($el).click()
                }
            })


            cy.get('#select2-idpekerjaan-container').click()
            cy.get('.select2-search__field').type(data.pekerjaan_pendaftar2)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.pekerjaan_pendaftar2) {
                    cy.wrap($el).click()
                }
            })

            // klik dari icon step 
            cy.get(':nth-child(6) > .f1-step-icon').click()

            cy.get(':nth-child(1) > .alert').should('contain', data.notif_berhasil)
        })

    })
    
    it("pendaftar melengkapi step pertama klik lanjut ke step kedua", () => {

        cy.fixture("pmb/data_pendaftar").then((data) => {
            cy.get('#select2-idagama-container').click()
            cy.get('.select2-search__field').type(data.agama_pendaftar2)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.agama_pendaftar2) {
                    cy.wrap($el).click()
                }
            })

            cy.get('#select2-idnegara-container').click()
            cy.get('.select2-search__field').type(data.kewarganegaraan)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.kewarganegaraan) {
                    cy.wrap($el).click()
                }
            })


            cy.get('#select2-idpekerjaan-container').click()
            cy.get('.select2-search__field').type(data.pekerjaan_pendaftar2)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.pekerjaan_pendaftar2) {
                    cy.wrap($el).click()
                }
            })

            // klik dari icon step 
            cy.get(':nth-child(3) > .f1-step-icon').click()

            cy.get(':nth-child(1) > .alert').should('contain', data.notif_berhasil)
        })
    })

    it("peringatan ketika terdapat step biodata pendaftar ada yang belum dilengkapi", () => {

        cy.fixture("pmb/data_pendaftar").then((data) => {
            cy.get('#select2-idagama-container').click()
            cy.get('.select2-search__field').type(data.agama_pendaftar2)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.agama_pendaftar2) {
                    cy.wrap($el).click()
                }
            })

            cy.get('#select2-idnegara-container').click()
            cy.get('.select2-search__field').type(data.kewarganegaraan)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.kewarganegaraan) {
                    cy.wrap($el).click()
                }
            })


            cy.get('#select2-idpekerjaan-container').click()
            cy.get('.select2-search__field').type(data.pekerjaan_pendaftar2)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.pekerjaan_pendaftar2) {
                    cy.wrap($el).click()
                }
            })

            // klik dari icon step 
            cy.get(':nth-child(6) > .f1-step-icon').click()


            // field pilihan pertama
            cy.get('#select2-pilihan_1-container').click()
            cy.get('.select2-container input').type(data.pilihan_1)
            cy.get('#select2-pilihan_1-results').each(($el, index, $list) => {
                if ($el.text() === data.pilihan_1) {
                    cy.wrap($el).click()
                }
            })

            // field pilihan kedua
            cy.get('#select2-pilihan_2-container').click()
            cy.get('.select2-search__field').type(data.pilihan_2)
            cy.get('#select2-pilihan_2-results').each(($el, index, $list) => {
                if ($el.text() === data.pilihan_2) {
                    cy.wrap($el).click()
                }
            })

            // field pilihan ketiga
            cy.get('#select2-pilihan_3-container').click()
            cy.get('.select2-search__field').type(data.pilihan_3)
            cy.get('#select2-pilihan_3-results').each(($el, index, $list) => {
                if ($el.text() === data.pilihan_3) {
                    cy.wrap($el).click()
                }
            })

            // klik simpan
            cy.get('.f1-buttons > .btn-warning').click()

            // peringatan jika pprodi pilihannya belum terisi
            // cy.get('.bootbox-body').should('contain', 'Mohon mengisi isian yang bergaris merah')
            // cy.get('.modal-content > .modal-footer > .btn').click()

            cy.get(':nth-child(1) > .alert').should('contain', data.notif_gagal)

            cy.get('body > section > div > div > div > section > div.body-pmb > div:nth-child(2) > div > div:nth-child(1) > div > strong > a')
            .invoke('removeAttr', 'target').click()
            cy.url().should('contain', '/domisili#form-daftar')
        })

    })

    it.only("Pendaftar melengkapi biodata", () => {

        cy.fixture("pmb/data_pendaftar").then((data) => {

            cy.get('#select2-idagama-container').click()
            cy.get('.select2-search__field').type(data.agama_pendaftar2)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.agama_pendaftar2) {
                    cy.wrap($el).click()
                }
            })

            cy.get('#select2-idnegara-container').click()
            cy.get('.select2-search__field').type(data.kewarganegaraan)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.kewarganegaraan) {
                    cy.wrap($el).click()
                }
            })


            cy.get('#select2-idpekerjaan-container').click()
            cy.get('.select2-search__field').type(data.pekerjaan_pendaftar2)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.pekerjaan_pendaftar2) {
                    cy.wrap($el).click()
                }
            })

            // klik dari icon step 
            cy.get(':nth-child(6) > .f1-step-icon').click()


            // field pilihan pertama
            cy.get('#select2-pilihan_1-container').click()
            cy.get('.select2-container input').type(data.pilihan_1)
            cy.get('#select2-pilihan_1-results').each(($el, index, $list) => {
                if ($el.text() === data.pilihan_1) {
                    cy.wrap($el).click()
                }
            })

            // field pilihan kedua
            cy.get('#select2-pilihan_2-container').click()
            cy.get('.select2-search__field').type(data.pilihan_2)
            cy.get('#select2-pilihan_2-results').each(($el, index, $list) => {
                if ($el.text() === data.pilihan_2) {
                    cy.wrap($el).click()
                }
            })

            // field pilihan ketiga
            cy.get('#select2-pilihan_3-container').click()
            cy.get('.select2-search__field').type(data.pilihan_3)
            cy.get('#select2-pilihan_3-results').each(($el, index, $list) => {
                if ($el.text() === data.pilihan_3) {
                    cy.wrap($el).click()
                }
            })

            // klik simpan
            cy.get('.f1-buttons > .btn-warning').click()

            cy.get(':nth-child(1) > .alert').should('contain', data.notif_gagal)

            // notif gagal lanjut ke step data domisili 

            cy.get('body > section > div > div > div > section > div.body-pmb > div:nth-child(2) > div > div:nth-child(1) > div > strong > a')
            .invoke('removeAttr', 'target').click()
            cy.url().should('contain', '/domisili#form-daftar')

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

            
            // klik dari icon step ke step terakhir
            cy.get(':nth-child(6) > .f1-step-icon').click()

            // klik simpan
            cy.get('.f1-buttons > .btn-warning').click()

            cy.get('body > section > div > div > div > section > div.body-pmb > div:nth-child(2) > div > div:nth-child(1) > div > strong > a')
            .invoke('removeAttr', 'target').click()
            cy.url().should('contain', '/datawali#form-daftar')

            // nama ibu
            cy.get('#namakeluarga_I').type(data.namaibu_pendaftar2)
            // pekerjaan ibu
            cy.get('#select2-pekerjaan_I-container').click()
            cy.get('.select2-search__field').type(data.pekerjaan_ibu_pendaftar2)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.pekerjaan_ibu_pendaftar2) {
                    cy.wrap($el).click()
                }
            })
            // penghasilan ibu
            cy.get('#select2-idpenghasilan_I-container').click()
            cy.get('.select2-search__field').type(data.penghasilan_ibu_pendaftar2)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.penghasilan_ibu_pendaftar2) {
                    cy.wrap($el).click()
                }
            })
            // nama ayah
            cy.get('#namakeluarga_A').type(data.namaayah_pendaftar2)
            // pekerjaan ayah
            cy.get('#select2-pekerjaan_A-container').click()
            cy.get('.select2-search__field').type(data.pekerjaan_ayah_pendaftar2)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.pekerjaan_ayah_pendaftar2) {
                    cy.wrap($el).click()
                }
            })
            // penghasilan ayah
            cy.get('#select2-idpenghasilan_A-container').click()
            cy.get('.select2-search__field').type(data.penghasilan_ayah_pendaftar2)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.penghasilan_ayah_pendaftar2) {
                    cy.wrap($el).click()
                }
            })

            // klik dari icon step ke step terakhir
            cy.get(':nth-child(6) > .f1-step-icon').click()

            // klik simpan
            cy.get('.f1-buttons > .btn-warning').click()


            cy.get('body > section > div > div > div > section > div.body-pmb > div:nth-child(2) > div > div:nth-child(1) > div > strong > a')
            .invoke('removeAttr', 'target').click()
            cy.url().should('contain', '/pendidikan#form-daftar')

            // tahun lulus 
            cy.get('#select2-thnlulus-container').click()
            cy.get('.select2-search__field').type(data.thn_lulus)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.thn_lulus) {
                    cy.wrap($el).click()
                }
            })

            // provinsi sekolah
            cy.get('#select2-idpropinsi-container').click().wait(3000)
            cy.get('.select2-search__field').type(data.provinsi_sekolah)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.provinsi_sekolah) {
                    cy.wrap($el).click()
                }
            })

            // kota sekolah
            cy.get('#select2-idkota-container').click().wait(3000)
            cy.get('.select2-search__field').type(data.kota_sekolah)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.kota_sekolah) {
                    cy.wrap($el).click()
                }
            })

            // jenis sekolah
            cy.get('#select2-idjenisinstitusi-container').click().wait(3000)
            cy.get('.select2-search__field').type(data.jenis_sekolah)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.jenis_sekolah) {
                    cy.wrap($el).click()
                }
            })

            // jenis sekolah
            cy.get('#select2-idjenisinstitusi-container').click()
            cy.get('.select2-search__field').type(data.jenis_sekolah)
            cy.get('.select2-results__option').each(($el, index, $list) => {
                if ($el.text() === data.jenis_sekolah) {
                    cy.wrap($el).click()
                }
            })

            // jurusan 
            cy.get('#jurusan').type(data.jurusan)

            // select2 npsn
            cy.get('#npsn_label').type(data.npsn)
            cy.get('.tt-dropdown-menu > .tt-dataset-0 div').each(($el, index , $list) =>{
                if($el.text() == data.npsn ) {
                    cy.wrap($el).click()
                }
             });

            cy.get('#nisn').type(data.nisn)
            cy.get('#nilai').type(data.nilai)

            // klik simpan di step akhir
            cy.get('.f1-buttons > .btn-warning').click()

            // // pengecekan notif berhasil
            cy.get(':nth-child(1) > .alert').should('contain', data.notif_berhasil)

        })


    })
})