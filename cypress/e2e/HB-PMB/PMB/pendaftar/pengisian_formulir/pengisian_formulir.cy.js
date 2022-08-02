describe("Pengisian Formulir", () => {

    beforeEach("Login Dosen", () => {
        // open spmbfront
        cy.visit('/spmbfront/')
    });

    it("Pengisian Formulir pendaftaran", () => {
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

            // cara 2
            // cy.get('.pos-content-top01 .card-footer :nth-child(2)').each(($el, index, $list) => {
            //     cy.log("hehe " + index03);
            //     if (index === index03) {
            //         cy.log(index03);
            //         cy.get('.btn-primary').eq(index03).click()
            //     }
            // })

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

            //select2 kewarganegaraan
            cy.get('#select2-idnegara-container').click({ force: true })
            cy.get('.select2-search__field').type(data.kewarganeragaan)
            cy.get('#select2-idnegara-results').each(($el, index, $list) => {
                if ($el.text() === data.kewarganeragaan) {
                    cy.wrap($el).click()
                }
            })

            // klik lanjut
            cy.get(':nth-child(2) > .btn').click()

            //select2 provinsi
            cy.get('#select2-idpropinsi-container').click({ force: true })
            cy.get('.select2-search__field').type(data.provinsi)
            cy.get('#select2-idpropinsi-results').each(($el, index, $list) => {
                if ($el.text() === data.provinsi) {
                    cy.wrap($el).click()
                }
            })
            //select2 kota
            cy.get('#select2-idkota-container').click({ force: true })
            cy.get('.select2-search__field').type(data.kota)
            cy.get('#select2-idkota-results').each(($el, index, $list) => {
                if ($el.text() === data.kota) {
                    cy.wrap($el).click()
                }
            })
            //select2 jenis sekolah
            cy.get('#select2-idjenisinstitusi-container').click({ force: true })
            cy.get('.select2-search__field').type(data.sekolah)
            cy.get('#select2-idjenisinstitusi-results').each(($el, index, $list) => {
                if ($el.text() === data.sekolah) {
                    cy.wrap($el).click()
                }
            })
            //select2 npsn
            cy.get('#npsn_label').type(data.npsn)
            // cy.get('#select2-npsn-results').each(($el, index, $list) => {
            //     if ($el.text() === data.npsn) {
            //         cy.wrap($el).click()
            //     }
            // })
            cy.get('.tt-dropdown-menu > .tt-dataset-0 div').each(($el, index , $list) =>{
                if($el.text() == data.npsn ) {
                    cy.wrap($el).click()
                }
             });
            //select2 tahun lulus
            cy.get('#select2-thnlulus-container').click()
            cy.get('.select2-search__field').type(data.thnlulus)
            cy.get('#select2-thnlulus-results').each(($el, index, $list) => {
                if ($el.text() === data.thnlulus) {
                    cy.wrap($el).click()
                }
            })
            // jurusan 
            cy.get('#jurusan').type(data.jurusan)
            
            // klik lanjut
            cy.get(':nth-child(2) > .btn').click()

            // field jenis pilihan 
            cy.get('#idjenispilihan').select('IPS').wait(3000)
            
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

            // klik button sebelumnya : 
            // cy.get(':nth-child(1) > .btn-outline-primary').click()

            // daftar sekarang
            // pengecekan ketika membuka halaman pratinjau
            cy.get(':nth-child(2) > .btn').invoke('removeAttr', 'target').click()
            cy.url().should('contain', '/spmbfront/pratinjau')

            // cek label 
            cy.get('.main-header').should('contain', 'Pratinjau Pendaftar')

            // cek isi tabel : 
            cy.get('.datapendaftar > div:nth-child(1)>.table-responsive > .table > tbody > tr:nth-child(1) > td:nth-child(2)')
            .should('contain', data.jalur)

            cy.get('.datapendaftar > div:nth-child(1)>.table-responsive > .table > tbody > tr:nth-child(2) > td:nth-child(2)')
            .should('contain', data.namapendaftar)

            cy.get('.datapendaftar > div:nth-child(1)>.table-responsive > .table > tbody > tr:nth-child(3) > td:nth-child(2)')
            .should('contain', data.email)

            // centang ketentuan : 
            cy.get('#filled-in-box').check({force: true})

            // klik perbarui data
            // cy.get('.f1-buttons .btn-outline-primary').invoke('removeAttr', 'target').click()
            // cy.url().should('contain', '/spmbfront/daftar')

            // klik button konfirmasi pendaftaran
            cy.get('.f1-buttons .btn-warning').click()

            // // pengecekan modal pilih pembayaran 
            cy.get('.modal-title').should('contain', 'Pilih Metode Pembayaran')

            var index04 = null
            cy.get('.cards-pilih-metode .method-name').each(($el, index, $list) => {
                cy.log('data', data.pilihan_bank)
                if ($el.text() === data.pilihan_bank) {
                    index04 = index;

                    cy.log('index', index04)

                    // cara 1
                    cy.get('.cards-pilih-metode').eq(index04).click()
                }
            })

            // aksi klik batal 
            // cy.get('.modal-footer > .btn-outline-primary').click()

            // aksi klik lanjutkan pembayaran
            cy.get('.modal-footer > .btn-warning').click()

            // cek pada modal 
            cy.get('.bootbox-body').should('contain', 'Anda akan melakukan proses pendaftaran?')

            // aksi cancel pada modal 
            // cy.get('.btn-default').click()

            // aksi OK pada modal dan cek halaman 
            cy.get('.btn-primary').invoke('removeAttr', 'target').click()
            cy.url().should('contain', '/spmbfront/aktivasi')

            // cek header 
            cy.get('.main-header').should('contain', 'Selesaikan Pembayaran')
            
            cy.get('.name').should('contain', data.namapendaftar)


        });
        
    });

})