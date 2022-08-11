const judulHalaman = "Informasi potongan tagihan";

describe(judulHalaman, () => {
    beforeEach(() => {
        // open spmbfront
        cy.visit('/spmbfront/')
    });

    it('Voucher yang telah berhasil digunakan kembali oleh pendaftar', () => {

        cy.get('.login-button').click()
        cy.get("#idpendaftar").type('212713011');
        cy.get("#pin").type('28072022');

        cy.get(".btn-warning").click();

        cy.get('.pull-left > .btn').click()

        // assert modal voucher
        cy.get('.modal-title').should('contain', 'Masukkan Kode Voucher')

        // mengisi voucher 
        cy.get('.bootbox-input').type('TJGNNJUHGV')

        // klik cancel
        // cy.get('.btn-default').click()

        // klik klaim voucher
        cy.get('.modal-footer > .btn-success').click()

        // assert gagal menggunakan voucher
        cy.get('.bootbox-body').should('contain', 'Kode voucher tidak bisa digunakan.')

        // klik ok 
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click()


    });

    it.only('Voucher dilakukan pembayaran dengan generate VA', () => {

        cy.get('.login-button').click()
        cy.get("#idpendaftar").type('212713011');
        cy.get("#pin").type('28072022');

        cy.get(".btn-warning").click();

        // klik centang tagihan
        cy.get('tbody > :nth-child(1) > :nth-child(1) > input').click()

        // klik generate va
        cy.get('div.text-right > .btn').click()

        // assert modal pilih pembayaran
        cy.get('.modal-title').should('contain', 'Pilih Metode Pembayaran')

        cy.fixture("pmb/data_formulir").then((data) => {
            var index04 = null
            cy.get('.cards-pilih-jalur .jalur-sub-header').each(($el, index, $list) => {
                cy.log('data', data.pilihan_bank2)
                if ($el.text() === data.pilihan_bank2) {
                    index04 = index;

                    cy.log('index', index04)

                    // cara 1
                    cy.get('.cards-pilih-jalur').eq(index04).click()
                }
            })

        })


        // // aksi klik batal 
        // // cy.get('.btn-outline-primary').click()

        // aksi klik generate
        cy.get('#generate').click()

        // assert 
        cy.get('.bootbox-body').should('contain', 'Apakah anda yakin melakukan generate Virtual Account?')

        // klik batal 
        // cy.get('.btn-default').click()
        // klik ok 
        cy.get('.btn-primary').click()

        // assert
        cy.get('.alert').should('contain', 'Berhasil Generate Virtual Account Virtual Account')


    });

    it('penggunaan voucher pada riwayat tagihan keuangan pendaftar', () => {

        cy.get('.login-button').click()
        cy.get("#idpendaftar").type('212713011');
        cy.get("#pin").type('28072022');

        cy.get(".btn-warning").click();

        cy.get('.pull-left > .btn').click()

        // assert modal voucher
        cy.get('.modal-title').should('contain', 'Masukkan Kode Voucher')

        // mengisi voucher 
        cy.get('.bootbox-input').type('TJGNNJUHGV')

        // klik cancel
        // cy.get('.btn-default').click()

        // klik klaim voucher
        cy.get('.modal-footer > .btn-success').click()

        // centang tagihan
        cy.get('tbody > :nth-child(1) > :nth-child(1) > input').click()

        // klik bayar dengan voucher 
        cy.get('#payvoucher > .btn').click()

        // assert modal konfirmasi menggunakan voucher
        cy.get('.bootbox-body').should('contain', 'Apakah anda yakin akan membayar tagihan menggunakan voucher?')

        // klik cancel 
        // cy.get('.btn-default').click()

        // klik ok 
        cy.get('.btn-primary').click()

        // assert berhasil menggunakan voucher
        cy.get('.alert').should('contain', 'Pembayaran menggunakan voucher berhasil')


    });

    it("Penggunaan Voucher melalui Pengisian Formulir pendaftaran", () => {
        cy.get(':nth-child(2) > [href="/siacloud/spmbfront/jalur-seleksi"] > p').click()


        cy.fixture("pmb/data_formulir").then((data) => {
            // this.data = data
            cy.log('data nama', data.nama_jalur)
            var index03 = null
            cy.get('.pos-content-top01 .namaperiode').each(($el, index, $list) => {
                cy.log($el.text() === data.nama_jalur, index)
                if ($el.text() === data.nama_jalur) {
                    index03 = index;

                    // cara 1
                    cy.get('.pos-content-top01 .card-footer :nth-child(2) .btn-primary').eq(index03).click()
                }
            })


            // mengisi data formulir
            cy.get('#namapendaftar').type(data.namapendaftar2)
            // field jk
            cy.get('#jk_P').check()
            // field nohp
            cy.get('#nohp').type(data.nohp2)
            // field email
            cy.get('#email').type(data.email2)
            // field tgl lahir
            cy.get('#tgllahir').clear().type(data.tgllahir2).tab()
            // field nik
            cy.get('#nik').type(data.nik2)
            // field tempat tgl lahir
            cy.get('#tmplahir').type(data.tmplahir2)

            //select2 kewarganegaraan
            cy.get('#select2-idnegara-container').click({ force: true })
            cy.get('.select2-search__field').type(data.kewarganeragaan2)
            cy.get('#select2-idnegara-results').each(($el, index, $list) => {
                if ($el.text() === data.kewarganeragaan2) {
                    cy.wrap($el).click()
                }
            })

            // klik lanjut
            cy.get(':nth-child(2) > .btn').click()

            //select2 provinsi
            cy.get('#select2-idpropinsi-container').click({ force: true })
            cy.get('.select2-search__field').type(data.provinsi2)
            cy.get('#select2-idpropinsi-results').each(($el, index, $list) => {
                if ($el.text() === data.provinsi2) {
                    cy.wrap($el).click()
                }
            })
            //select2 kota
            cy.get('#select2-idkota-container').click({ force: true })
            cy.get('.select2-search__field').type(data.kota2)
            cy.get('#select2-idkota-results').each(($el, index, $list) => {
                if ($el.text() === data.kota2) {
                    cy.wrap($el).click()
                }
            })
            //select2 jenis sekolah
            cy.get('#select2-idjenisinstitusi-container').click({ force: true })
            cy.get('.select2-search__field').type(data.sekolah2)
            cy.get('#select2-idjenisinstitusi-results').each(($el, index, $list) => {
                if ($el.text() === data.sekolah2) {
                    cy.wrap($el).click()
                }
            })
            //select2 npsn
            cy.get('#npsn_label').type(data.npsn2)

            cy.get('.tt-dropdown-menu > .tt-dataset-0 div').each(($el, index, $list) => {
                if ($el.text() == data.npsn2) {
                    cy.wrap($el).click()
                }
            });
            //select2 tahun lulus
            cy.get('#select2-thnlulus-container').click()
            cy.get('.select2-search__field').type(data.thnlulus2)
            cy.get('#select2-thnlulus-results').each(($el, index, $list) => {
                if ($el.text() === data.thnlulus2) {
                    cy.wrap($el).click()
                }
            })
            // jurusan 
            cy.get('#jurusan').type(data.jurusan2)

            // klik lanjut
            cy.get(':nth-child(2) > .btn').click()

            // field jenis pilihan 
            cy.get('#idjenispilihan').select('IPS').wait(3000)

            // field pilihan pertama
            cy.get('#select2-pilihan_1-container').click()
            cy.get('.select2-container input').type(data.pilihan2_1)
            cy.get('#select2-pilihan_1-results').each(($el, index, $list) => {
                if ($el.text() === data.pilihan2_1) {
                    cy.wrap($el).click()
                }
            })

            // field pilihan kedua
            cy.get('#select2-pilihan_2-container').click()
            cy.get('.select2-search__field').type(data.pilihan2_2)
            cy.get('#select2-pilihan_2-results').each(($el, index, $list) => {
                if ($el.text() === data.pilihan2_2) {
                    cy.wrap($el).click()
                }
            })

            // field pilihan ketiga
            cy.get('#select2-pilihan_3-container').click()
            cy.get('.select2-search__field').type(data.pilihan2_3)
            cy.get('#select2-pilihan_3-results').each(($el, index, $list) => {
                if ($el.text() === data.pilihan2_3) {
                    cy.wrap($el).click()
                }
            })

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
                .should('contain', data.namapendaftar2)

            cy.get('.datapendaftar > div:nth-child(1)>.table-responsive > .table > tbody > tr:nth-child(3) > td:nth-child(2)')
                .should('contain', data.email2)


            // aksi klik punya kode voucher
            cy.get('.text-right > .btn').click()

            // assert modal voucher
            cy.get('.modal-title').should('contain', 'Masukkan Kode Voucher')

            // mengisi voucher 
            cy.get('.bootbox-input').type(data.voucher)

            // klik cancel
            // cy.get('.btn-default').click()

            // klik klaim voucher
            cy.get('.btn-success').click()

            // asssert notif berhasil memakai voucher
            cy.get('#kodevoucher').should('contain', data.voucher)



            // centang ketentuan : 
            cy.get('#filled-in-box').check({ force: true })



            // klik button konfirmasi pendaftaran
            cy.get('.f1-buttons .btn-warning').click()

            // pengecekan modal pilih pembayaran 
            cy.get('.modal-title').should('contain', 'Pilih Metode Pembayaran')

            var index04 = null
            cy.get('.cards-pilih-metode .method-name').each(($el, index, $list) => {
                cy.log('data', data.pilihan_bank2)
                if ($el.text() === data.pilihan_bank2) {
                    index04 = index;

                    cy.log('index', index04)

                    // cara 1
                    cy.get('.cards-pilih-metode').eq(index04).click()
                }
            })

            // // aksi klik batal 
            // // cy.get('.modal-footer > .btn-outline-primary').click()

            // aksi klik lanjutkan pembayaran
            cy.get('.modal-footer > .btn-warning').click()

            // cek pada modal 
            cy.get('.bootbox-body').should('contain', 'Anda akan melakukan proses pendaftaran?')

            // aksi OK pada modal dan cek halaman 
            cy.get('.btn-primary').invoke('removeAttr', 'target').click()
            cy.url().should('contain', '/spmbfront/aktivasi')

            // cek header 
            cy.get('.main-header').should('contain', 'Selesaikan Pembayaran')

            cy.get('.name').should('contain', data.namapendaftar2)


        });

    });
})